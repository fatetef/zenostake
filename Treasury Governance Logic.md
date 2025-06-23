+-----------------------+
|  User Stakes Tokens   |
+-----------------------+
           |
           v
+-----------------------+
|    Prediction Pool    |
+-----------------------+
      /           \
     v             v
+-----------------------+    +-----------------------------+
|        Winners        |    |      Protocol Treasury      |
|  (Based on Accuracy)  |    | (Fees Collected from Pool)  |
+-----------------------+    +-----------------------------+
           |                              |
           v                              v
  Rewards Paid Out to Winners    Funds Used for Governance, Marketing,
                                 Community Incentives, Dev Compensation
Prediction Accuracy Formula (Scoring System)
You can implement this formula to reward users based on proximity:

📊 Accuracy-Based Reward Multiplier:
𝑅
𝑒
𝑤
𝑎
𝑟
𝑑
𝑀
𝑢
𝑙
𝑡
𝑖
𝑝
𝑙
𝑖
𝑒
𝑟
=
1
−
(
∣
𝑃
𝑟
𝑒
𝑑
𝑖
𝑐
𝑡
𝑒
𝑑
𝑃
𝑟
𝑖
𝑐
𝑒
−
𝐴
𝑐
𝑡
𝑢
𝑎
𝑙
𝑃
𝑟
𝑖
𝑐
𝑒
∣
/
𝑇
𝑜
𝑙
𝑒
𝑟
𝑎
𝑛
𝑐
𝑒
𝑅
𝑎
𝑛
𝑔
𝑒
)
RewardMultiplier=1−(∣PredictedPrice−ActualPrice∣/ToleranceRange)
Tolerance Range = Set acceptable price window (e.g., 5% of asset price)

If prediction is spot-on → Multiplier approaches 1 (maximum reward)

If prediction is far → Multiplier approaches 0 (no reward)

Example:
Asset price = $100

Tolerance Range = ±$5

User predicted $103

Actual price = $101

Accuracy calculation:

𝑅
𝑒
𝑤
𝑎
𝑟
𝑑
𝑀
𝑢
𝑙
𝑡
𝑖
𝑝
𝑙
𝑖
𝑒
𝑟
=
1
−
(
∣
103
−
101
∣
/
5
)
=
1
−
(
2
/
5
)
=
0.6

Accuracy = |Predicted Price - Actual Price|
Reward Multiplier = 1 / (1 + Accuracy)

RewardMultiplier=1−(∣103−101∣/5)=1−(2/5)=0.6
➡️ User gets 60% of their potential reward share.

This creates a smooth accuracy curve instead of a strict win/lose result.
