/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => {
    const split = address.split('')

    for (let i = 0; i < split.length; i++) {
        if (split[i] === '.') {
            split[i] = '[.]'
        }
    }

    let result = ''

    for (let i = 0; i < split.length; i++) {
        result += split[i]
    }

    return result
}

console.log(defangIPaddr('255.100.50.0'))