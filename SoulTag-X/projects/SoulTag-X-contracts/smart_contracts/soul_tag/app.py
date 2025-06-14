from beaker import *
from pyteal import *

app = Application("SoulTagX")

# --- Constants ---
tag_key_prefix = Bytes("tag_")       # global: tag_<type> → metadata
ts_key_suffix = Bytes("_ts")         # global: tag_<type>_ts → last minted timestamp

user_tag_key_prefix = Bytes("utag_")  # local: utag_<type> → 1 if owned
user_ts_key_prefix = Bytes("uts_")    # local: uts_<type> → last reissue ts

propose_key_prefix = Bytes("prop_")   # global: prop_<type> → (metadata)
approval_key_prefix = Bytes("apprv_") # global: apprv_<type>_<admin> → 1/0

admin_1 = Addr("YOUR_ADMIN_1_ADDRESS")  
admin_2 = Addr("YOUR_ADMIN_2_ADDRESS")
admin_3 = Addr("YOUR_ADMIN_3_ADDRESS")

admins = [admin_1, admin_2, admin_3]
COOLDOWN_SECONDS = Int(60 * 60 * 24 * 30)

# --- Utility ---
def tag_keys(tag_type: Expr):
    tag_key = Concat(tag_key_prefix, tag_type)
    ts_key = Concat(tag_key, ts_key_suffix)
    return tag_key, ts_key

def proposal_keys(tag_type: Expr, admin: Expr):
    prop_key = Concat(propose_key_prefix, tag_type)
    apprv_key = Concat(approval_key_prefix, tag_type, admin)
    return prop_key, apprv_key

# --- Create ---
@app.create
def create():
    return Approve()

# --- Clear/Delete ---
@app.delete
def delete():
    return Approve()

@app.clear_state
def clear():
    return Approve()

# --- 1. Propose a Mint (Admin Only) ---
@app.external(authorize=Authorize.only(*admins))
def propose_mint(tag_type: abi.String, metadata: abi.String, *, output: abi.String):
    prop_key = Concat(propose_key_prefix, tag_type.get())
    App.globalPut(prop_key, metadata.get())

    for admin in admins:
        apprv_key = Concat(approval_key_prefix, tag_type.get(), admin)
        App.globalPut(apprv_key, Int(0))

    # Auto-approve by proposer
    own_apprv = Concat(approval_key_prefix, tag_type.get(), Txn.sender())
    App.globalPut(own_apprv, Int(1))

    output.set(Bytes("proposal_created"))

# --- 2. Approve Mint (Multisig Voting) ---
@app.external(authorize=Authorize.only(*admins))
def approve_mint(tag_type: abi.String, *, output: abi.String):
    apprv_key = Concat(approval_key_prefix, tag_type.get(), Txn.sender())
    App.globalPut(apprv_key, Int(1))
    output.set(Bytes("approved"))

# --- 3. Execute Mint (Only when >= 2 approvals) ---
@app.external(authorize=Authorize.only(*admins))
def execute_mint(recipient: abi.Account, tag_type: abi.String, *, output: abi.String):
    tag_key, ts_key = tag_keys(tag_type.get())
    prop_key = Concat(propose_key_prefix, tag_type.get())

    meta = App.globalGet(prop_key)
    now = Global.latest_timestamp()

    # Count approvals
    approvals = Sum([App.globalGet(Concat(approval_key_prefix, tag_type.get(), admin)) for admin in admins])
    already_owned = App.localGet(recipient.address(), Concat(user_tag_key_prefix, tag_type.get()))

    return Seq([
        Assert(approvals >= Int(2)),
        Assert(already_owned == Int(0)),
        App.globalPut(tag_key, meta),
        App.globalPut(ts_key, now),
        App.localPut(recipient.address(), Concat(user_tag_key_prefix, tag_type.get()), Int(1)),
        App.localPut(recipient.address(), Concat(user_ts_key_prefix, tag_type.get()), now),
        output.set(Bytes("minted")),
    ])

# --- 4. Reissue if cooldown passed ---
@app.external
def reissue(tag_type: abi.String, *, output: abi.String):
    sender = Txn.sender()
    now = Global.latest_timestamp()

    owned = App.localGet(sender, Concat(user_tag_key_prefix, tag_type.get()))
    last_ts = App.localGet(sender, Concat(user_ts_key_prefix, tag_type.get()))
    cooldown_ok = now > last_ts + COOLDOWN_SECONDS

    return Seq([
        Assert(owned == Int(1)),
        Assert(cooldown_ok),
        App.localPut(sender, Concat(user_ts_key_prefix, tag_type.get()), now),
        output.set(Bytes("reissued")),
    ])

# --- 5. View Metadata (Public) ---
@app.external
def get_metadata(tag_type: abi.String, *, output: abi.String):
    tag_key = Concat(tag_key_prefix, tag_type.get())
    output.set(App.globalGet(tag_key))

# --- 6. Check Ownership (Public) ---
@app.external(read_only=True)
def has_tag(tag_type: abi.String, user: abi.Account, *, output: abi.Bool):
    output.set(App.localGet(user.address(), Concat(user_tag_key_prefix, tag_type.get())) == Int(1))

# --- 7. Get Last Reissue (Optional) ---
@app.external(read_only=True)
def get_last_reissue(tag_type: abi.String, user: abi.Account, *, output: abi.Uint64):
    output.set(App.localGet(user.address(), Concat(user_ts_key_prefix, tag_type.get())))
