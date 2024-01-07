/**
 * @param {string[]} details
 * @return {number}
 */
const countSeniors = (details) => {
    let seniors = 0

    for (let i = 0; i < details.length; i++) {

        if (details[i][10] !== 'M' && details[i][10] !== 'F' && details[i][10] !== 'O') {
            continue
        }

        const stringAge = details[i][11] + details[i][12]
        const age = Number.parseInt(stringAge)

        if (age > 60) {
            seniors++
        }
    }

    return seniors
}

console.log(countSeniors(["9751302862F0693", "3888560693F7262", "5485983835F0649", "2580974299F6042", "9976672161M6561", "0234451011F8013", "4294552179O6482"]))