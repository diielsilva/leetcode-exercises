const isSubsequence = (s, t) => {

    let pos = 0
    let count = 0

    for (let i = 0; i < s.length; i++) {

        for (let j = pos; j < t.length; j++) {
            if (t[j] === s[i]) {
                count++
                pos = j + 1
                break
            }

        }
    }

    return count === s.length

}