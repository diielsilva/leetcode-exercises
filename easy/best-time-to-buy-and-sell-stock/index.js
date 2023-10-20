const maxProfit = (prices) => {
    let profit = 0

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const aux = prices[j] - prices[i]
            if (aux > profit) {
                profit = aux
            }
        }
    }

    return profit
}

console.log(maxProfit([7, 6, 4, 3, 1]))