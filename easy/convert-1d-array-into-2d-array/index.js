/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
const construct2DArray = (original, m, n) => {
    const result = []
    const size = original.length / n

    if (!Number.isInteger(size)) {
        return result
    }

    if (size !== m) {
        return result
    }

    let aux = 0
    let insert = []
    const stopCon = n - 1

    for (let i = 0; i < original.length; i++) {
        if (aux < stopCon) {
            aux++
            insert.push(original[i])
        } else if (aux === stopCon) {
            insert.push(original[i])
            result.push(insert)
            insert = []
            aux = 0
        }
    }

    return result
}

console.log(construct2DArray([1, 2], 1, 1))