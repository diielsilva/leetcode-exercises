/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
    const firstRow = 'qwertyuiop'
    const secondRow = 'asdfghjkl'
    const thirdRow = 'zxcvbnm'
    const result = []

    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase()
        let aux = ''
        let index = 0

        while (index < word.length) {
            for (let j = 0; j < firstRow.length; j++) {
                if (word[index] === firstRow[j]) {
                    aux += firstRow[j]
                    break
                }
            }

            index++
        }

        if (aux === word) {
            result.push(words[i])
            continue
        }

        aux = ''
        index = 0

        while (index < word.length) {
            for (let j = 0; j < secondRow.length; j++) {
                if (word[index] === secondRow[j]) {
                    aux += secondRow[j]
                    break
                }
            }

            index++
        }

        if (aux === word) {
            result.push(words[i])
            continue
        }

        aux = ''
        index = 0

        while (index < word.length) {
            for (let j = 0; j < thirdRow.length; j++) {
                if (word[index] === thirdRow[j]) {
                    aux += thirdRow[j]
                    break
                }
            }

            index++
        }

        if (aux === word) {
            result.push(words[i])
        }


    }


    return result
}

console.log(findWords(['a','b']))