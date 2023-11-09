/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    let first = -1

    for (let i = 0; i < s.length; i++) {
        let times = 0

        for (let j = 0; j < s.length; j++) {
            if (s[i] === s[j]) {
                times++

                if (times > 1) {
                    break
                }
            }
        }

        if (times === 1) {
            first = i
            return first
        }
    }

    return first
}

console.log(firstUniqChar('aabb'))