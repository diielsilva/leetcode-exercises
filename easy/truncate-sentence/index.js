/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = (s, k) => {
    const split = s.split(' ')
    let result = ''

    for (let i = 0; i < k; i++) {
        if (i === k - 1) {
            result += split[i]
        }
        else {
            result += split[i] + ' '
        }
    }

    return result
}

console.log(truncateSentence('What is the solution to this problem', 4))