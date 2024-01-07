/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = (candyType) => {
    const ateCandies = []
    const maxCandies = candyType.length / 2

    for (let i = 0; i < candyType.length; i++) {
        let alreadyAte = false

        for (let j = 0; j < ateCandies.length; j++) {

            if (candyType[i] === ateCandies[j]) {
                alreadyAte = true
                break
            }
        }

        if (alreadyAte === false && ateCandies.length < maxCandies) {
            ateCandies.push(candyType[i])

            if (ateCandies.length === maxCandies) {
                break
            }
        }
    }

    return ateCandies.length
}