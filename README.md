# 🔮 ZenoStake – Predict, Stake & Earn on Solana

ZenoStake is a gamified DeFi protocol where users **predict market movements**, **stake tokens**, and **earn rewards** based on accuracy. Built on Solana, it combines decentralized prediction markets with DeFi mechanics for a fun and rewarding experience.

👉 **Live Demo:** [zenostake.vercel.app](https://zenostake.vercel.app)  
👉 **GitHub:** [github.com/fatetef/zenostake](https://github.com/fatetef/zenostake)

---

## 🚀 Features

- 📈 Predict crypto price direction (e.g. SOL, JUP, BTC)
- 🪙 Stake tokens based on confidence
- 🏆 Earn rewards from a shared pool if predictions are correct
- 🔁 Integrates Jupiter for token swaps and routing (coming soon)
- 🎨 Built with Next.js, Tailwind CSS, and Solana Wallet Adapter

---

## 💡 How It Works

1. **Choose a Market**  
   Select a token pair like SOL/USDC or JUP/USDC and predict whether it will go **Up or Down** in the next prediction window.

2. **Stake Tokens**  
   Lock your tokens to back your prediction. Bigger stakes mean higher potential rewards.

3. **Result & Rewards**  
   At the end of the cycle, winners split the reward pool proportionally. Results are verified using on-chain price feeds.

---

## 🛠️ Tech Stack

| Layer         | Stack / Protocol     |
|---------------|----------------------|
| Blockchain    | Solana               |
| Wallet        | Solana Wallet Adapter |
| Swap Routing  | Jupiter Aggregator (Planned) |
| Frontend      | Next.js + Tailwind CSS |
| Backend       | Vercel / Serverless  |
| State         | Custom local + RPC   |

---

## 🧑‍💻 Local Development

Clone the repo and install dependencies:

```bash
git clone https://github.com/fatetef/zenostake.git
cd zenostake
npm install
npm run dev

## 💡 How It Works

ZenoStake is NOT a traditional "binary market" where users predict just Up/Down (Yes/No).  
Instead, ZenoStake focuses on **precision-based predictions.**

### 🎯 Prediction Mechanism:
- Users predict **exact future price levels** (e.g. SOL will hit $152.40).
- Accuracy is determined by **how close** the predicted price is to the actual outcome.
- The closer your prediction, the higher your reward multiplier.
- **No simple Yes/No logic.** Rewards are distributed on a curve based on precision.

---

### 🏦 Staking & Funding Circulation:
1. **Users Stake Tokens**:
   - Stake tokens to back your prediction.
   - Minimum and maximum stake amounts apply.

2. **Prediction Pool**:
   - All stakes from a prediction window go into a shared pool.
   - A percentage (e.g. 5%) is reserved as a protocol fee.

3. **Reward Distribution**:
   - Winners share the reward pool based on **accuracy proximity** to the real result.
   - The closer you predict, the larger your share.

4. **Protocol Revenue Flow**:
   - Protocol fees go to the treasury.
   - Treasury is governed by token holders.
   - Funds can be used for community incentives, marketing, or future development.

---

### 🗳️ Governance:
- Governance token holders will be able to:
   - Vote on treasury fund usage.
   - Adjust staking fees or reward curve models.
   - Propose new prediction markets.
- Community votes determine **future upgrades** and economic parameters.

---

### 🔄 Jupiter Integration (Planned)
- Native **Jupiter Swap** integration to allow users to swap tokens before staking.
- Promotes token swaps and liquidity within the Jupiter ecosystem.
- Rewards can optionally be distributed in Jupiter-supported tokens.

---

### 🚀 Key Differences from Traditional Prediction Markets:
| Feature                | Traditional Binary Market | ZenoStake                  |
|------------------------|---------------------------|----------------------------|
| Prediction Type        | Yes/No (Up or Down)       | Exact Price Predictions     |
| Reward Basis           | Win/Lose                  | Accuracy Proximity Curve    |
| Governance             | Centralized or DAO-based  | Decentralized via Treasury  |
| Funding Circulation    | Static Fee or Loss Pool    | Dynamic, Multi-layered Pool |

---

## 🛠️ Local Development

(Keep the rest as already provided)

