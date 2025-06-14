# 🪙 SoulTag X – Soulbound Identity & Credential Tokens on Algorand

**SoulTag X** is a full-stack decentralized application built on Algorand for issuing, verifying, and reclaiming **soulbound tokens** (non-transferable ASAs) that represent identity, credentials, access badges, and DAO roles.

> 🔐 "Unstealable. Untransferable. Undeniable Proof."

---

## 🔧 Project Status

-Ready to use

---

## 🎯 Goal

Enable **on-demand tokenization** of identity-linked credentials using smart contracts that:

- Enforce **soulbound behavior** (non-transferable tokens)
- Allow **secure reissuance** using hashed user identifiers
- Support **metadata-rich tokens** via ARC-53
- Offer a modular interface for real-world use (KYC, certs, DAO badges)

---

## ✨ Planned Features

| Feature                        | Description |
|-------------------------------|-------------|
| 🪪 Soulbound Tokens            | ASAs that cannot be transferred by users |
| 🔁 On-Demand Reissuance        | Lost token? Reclaim it with identity hash verification |
| 🧠 Smart Contract Logic        | Implements `mint()`, `reissue()`, `balance_of()`, etc. |
| 🎨 ARC-53 Metadata Integration | IPFS-hosted metadata per tag (image, description, mimetype) |
| 🛡️ Multisig Controls           | Revoke or manage roles with DAO-like security |
| 🧾 Public Verifier UI/API      | Check if an address holds a valid SoulTag |
| 🧱 Full Stack Implementation   | PyTEAL smart contract + React frontend with WalletConnect |

---

## 🛠️ Tech Stack

- **Smart Contract Language**: PyTEAL (Algorand Virtual Machine)
- **Frontend**: React + TailwindCSS + WalletConnect (Pera/MyAlgo)
- **Backend**: AlgoKit full-stack template
- **Token Standards**: ASA + ARC-53 (metadata) + ARC-200-inspired logic
- **Metadata Hosting**: IPFS

---

## 🧩 Use Cases

- 🎓 Course Completion Badges  
- 🧾 KYC Verification Tokens  
- 🎫 Event or Club Access Passes  
- 🏛️ DAO Membership Credentials  
- 🎖️ Loyalty & Achievement Tokens  

---
## 🌐 How to Use

![Screenshot (61)](https://github.com/user-attachments/assets/3ee25a8f-d62b-459f-abab-b41fc63696c5)

### 🔑 As an Admin
![Screenshot (62)](https://github.com/user-attachments/assets/637e5200-1a32-45d4-8525-1d88c875fc79)

1. Connect wallet (must be a registered admin)
![Screenshot (63)](https://github.com/user-attachments/assets/064e141f-4513-47fb-9f1b-1962621176af)

2. Go to **Admin Panel**

![Screenshot (64)](https://github.com/user-attachments/assets/97109430-26b7-47ba-a0eb-782c769e2355)

3. Propose a tag (e.g. `Developer`, `DAO`, etc.)
![Screenshot (66)](https://github.com/user-attachments/assets/21fcc5a7-fcfa-4f19-bd8a-0ce9f0c40c9b)

4. Execute the mint to deliver the tag

![Screenshot (68)](https://github.com/user-attachments/assets/625e0b1d-b9c9-4425-9a5d-132c3aca2ef7)


---

### 👤 As a User

1. Connect wallet
2. View your issued tags
3. Request a reissue (only one per 30 days per tag)
![Screenshot (69)](https://github.com/user-attachments/assets/12639bf1-9cf6-4209-8f59-a30d36d459d8)

4. View your tag metadata and public verification

---

### 🔍 As a Verifier

1. Navigate to `/verify`
![Screenshot (70)](https://github.com/user-attachments/assets/7079006e-b436-4032-b37d-edda49781105)

2. Enter any Algorand wallet address
3. View SoulTags and their associated metadata
![Screenshot (71)](https://github.com/user-attachments/assets/d84c8418-523f-459c-9d85-de108f172cb3)

## 📦 How to Use

### 👨‍💻 For Developers

- Integrate the smart contract methods like `get_metadata()`, `has_tag()`, and `reissue()` into your dApp to manage identity-based access, badges, or certifications.
- Extend or customize contract logic to add features like:
  - Expiring tags
  - NFT skin overlays
  - Revocable access tokens
- Easily retrieve metadata for any tag using the ABI methods and display ARC-53-compliant visuals.

---

### 🧭 For Wallets & Explorers

- Use `has_tag(tag_type, address)` and `get_metadata(tag_type)` to:
  - Show which verified tags a user holds
  - Display tag info like badge image, type, and description
- Verify identities in a decentralized, read-only way — ideal for integration into DAO dashboards or wallet profiles.

---

### 🏢 For Issuers / Certifying Bodies

- Use SoulTag X to issue non-transferable proof-of-participation, KYC verification, certifications, or role-based tokens.
- Customize tags with your branding via ARC-53 metadata hosted on IPFS.
- Manage issuance securely using a **2-of-3 multisig admin flow**.

---

# 🤝 Contributing to SoulTag X

Thank you for considering a contribution to **SoulTag X**!  
We welcome bug reports, feature requests, and code contributions to help improve the future of decentralized identity on Algorand.

---

## 🧰 Project Setup

### Requirements

- Python 3.10+
- Node.js v18+
- AlgoKit CLI (v2+)
- Algorand Wallet (TestNet or LocalNet)
- IPFS account (e.g. Pinata, NFT.storage)

---

## 📦 How to Contribute

### 1. Fork the Repository

### 2. Clone Your Fork

### 3. Create a Feature Branch

### 4. Make Changes

### 5. Commit Your Changes

### 6. Push Your Branch

### 7. Submit a Pull Request
---

## 🪪 License

This project is licensed under the MIT License.
Feel free to use, modify, or fork for your own identity, badge, or credentialing use case.

---

## 📬 Contact

For collaboration or questions, reach out:

* Email: thatsdanish02@gmail.com
