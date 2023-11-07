const mergeAlternately = (word1, word2) => {
    let result = ''

    if (word1.length > word2.length) {

        for (let i = 0; i < word2.length; i++) {
            result += word1[i]
            result += word2[i]
        }

        for (let i = word2.length; i < word1.length; i++) {
            result += word1[i]
        }

    } else if (word2.length > word1.length) {
        for (let i = 0; i < word1.length; i++) {
            result += word1[i]
            result += word2[i]
        }

        for (let i = word1.length; i < word2.length; i++) {
            result += word2[i]
        }
    } else {
        for (let i = 0; i < word1.length; i++) {
            result += word1[i]
            result += word2[i]
        }
    }

    return result
}

console.log(mergeAlternately('abcd', 'pq'))