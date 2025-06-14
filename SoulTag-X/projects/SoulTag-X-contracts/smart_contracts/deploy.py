from algokit_utils import (
    get_algod_client,
    get_indexer_client,
    get_accounts,
    ApplicationClient
)
from smart_contracts.soul_tag import app

def deploy():
    algod = get_algod_client()
    indexer = get_indexer_client()
    accounts = get_accounts()
    creator = accounts[0]  # Uses the first account from Sandbox or AlgoKit

    app_client = ApplicationClient(
        client=algod,
        app=app,
        signer=creator.signer,
        creator=creator.address,
    )

    print("Deploying SoulTag X contract...")

    app_id, _, _ = app_client.deploy()
    print("✅ Deployed with App ID:", app_id)

if __name__ == "__main__":
    deploy()
