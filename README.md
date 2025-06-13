# 🪙 SoulTag X – Soulbound Identity & Credential Tokens on Algorand

**SoulTag X** is a full-stack decentralized application built on Algorand for issuing, verifying, and reclaiming **soulbound tokens** (non-transferable ASAs) that represent identity, credentials, access badges, and DAO roles.

> 🔐 "Unstealable. Untransferable. Undeniable Proof."

---

## 🔧 Project Status

🚧 This project is currently under development for the **Algorand Live Hack: Tokenization Challenge**. The code, contracts, and frontend are being actively built and tested.  
> ✅ This README will be updated with finalized logic, screenshots, and deployment steps upon completion.

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

