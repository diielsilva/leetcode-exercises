const lengthOfLongestSubstring = (s) => {
    let lastResult = ''
    let result = ''

    for (let i = 0; i < s.length; i++) {
        if (result == '') {
            result += s[i]
        }
        else {
            for (let j = 0; j < result.length; j++) {
                if (result[j] == s[i]) {
                    if (result.length >= lastResult.length) {
                        lastResult = result
                        result = ''
                    }
                }
            }

            result += s[i]

        }
    }

    if (lastResult.length > result.length) {
        return lastResult.length
    }

    return result.length

}

console.log(lengthOfLongestSubstring('dvdf'))