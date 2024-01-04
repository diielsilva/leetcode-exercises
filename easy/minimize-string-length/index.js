/**
 * @param {string} s
 * @return {number}
 */
const minimizedStringLength = (s) => {
    const split = s.split('')
    let result = ''

    for (let i = 1; i < split.length; i++) {
        let value = split[i]

        if (value === '') {
            continue
        }

        for (let j = i - 1; j >= 0; j--) {
            if (split[j] === value) {
                split[j] = ''
                break
            }
        }

        for (let k = i + 1; k < split.length; k++) {
            if (split[k] === value) {
                split[k] = ''
                break
            }
        }
    }

    for (let i = 0; i < split.length; i++) {
        if (split[i] !== '') {
            result += split[i];
        }
    }

    return result.length
}

console.log(minimizedStringLength('aaabc'))