/*
 * @Author: zhaoqian.tang
 * @Date: 2021-09-07 17:04:36
 * @Desc: 动态规划
 */
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢
function climbStair(n) {
    const dp = []
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2

    for(let i = 3;i<=n;i++) {
        dp[i] = dp[i - 2] + dp[i - 1]
    }
    console.log(n, dp[n])
    return dp[n]
}

climbStair(1)
climbStair(3)
climbStair(9)

// 你是一个专业的小偷，计划偷窃沿街的房屋。
// 每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
// 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额
function steal(moneyArr) {
    let max
    const length = moneyArr.length
    if(length === 0) return 0
    if(length === 1) return moneyArr[0]
    if(length === 2) return Math.max(moneyArr[0], moneyArr[1])

    // 递归复杂度比较高
    // if(moneyArr.length > 2) {
    //     max = Math.max(steal(moneyArr.slice(0, length - 1)), steal(moneyArr.slice(0, length - 2)) + moneyArr[length - 1])
    // }
    // return max

    let dp = [moneyArr[0], Math.max(moneyArr[0], moneyArr[1])]

    for(let i = 2; i < length; i ++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + moneyArr[i])
        console.log(i, dp[i])
    }
}

steal([1,2,4,12,3,6,2])