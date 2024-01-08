/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
    const result = []

    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            result.push([1])
        } else if (i === 1) {
            result.push([1, 1])
        } else {
            const pos = result[result.length - 1]
            const aux = []
            aux.push(1)

            for (let j = 1; j < pos.length; j++) {
                aux.push(pos[j - 1] + pos[j])
            }

            aux.push(1)

            result.push(aux)

        }
    }

    return result
}

console.log(generate(5))