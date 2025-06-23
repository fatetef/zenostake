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
