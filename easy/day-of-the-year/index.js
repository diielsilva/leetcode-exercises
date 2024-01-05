/**
 * @param {string} date
 * @return {number}
 */
const dayOfYear = (date) => {
    const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12]
    const monthsWith30Days = [4, 6, 9, 11]
    const split = date.split('-')
    const monthNumber = Number.parseInt(split[1])
    let year = Number.parseInt(split[0]) - 1900
    let bi
    if (year > 0) {
        bi = year % 4 === 0
    } else {
        bi = false
    }
    let days = 0

    for (let i = 1; i < monthNumber; i++) {
        let isPresent = false

        for (let j = 0; j < monthsWith31Days.length; j++) {
            if (i === monthsWith31Days[j]) {
                isPresent = true
                break
            }
        }

        if (isPresent) {
            days += 31
            continue
        }

        for (let j = 0; j < monthsWith30Days.length; j++) {
            if (i === monthsWith30Days[j]) {
                isPresent = true
                break
            }
        }

        if (isPresent) {
            days += 30
            continue
        } else {
            if (bi) {
                days += 29
            } else {
                days += 28
            }
        }
    }

    return days += Number.parseInt(split[2])
}

console.log(dayOfYear('2019-05-22'))