const calPoints = (operations) => {
    const scoreStack = []
    let top = -1
    let score = 0

    for (let i = 0; i < operations.length; i++) {
        const value = Number.parseInt(operations[i])

        if (!Number.isNaN(value)) {
            top++
            scoreStack[top] = value
            score += value
        } else {
            switch (operations[i]) {
                case '+':
                    const a = scoreStack[top] + scoreStack[top - 1]
                    top++
                    score += a
                    scoreStack[top] = a
                    break
                case 'D':
                    const b = scoreStack[top] * 2
                    top++
                    score += b
                    scoreStack[top] = b
                    break
                case 'C':
                    score -= scoreStack[top]
                    scoreStack[top] = null
                    top--
                    break
            }
        }
    }

    return score

}

console.log(calPoints(["5","-2","4","C","D","9","+","+"]))