/**
 * @param {number[]} arr
 * @return {boolean}
 */

const uniqueOccurrences = (arr) => {
    const numbers = []
    const occurrences = []

    for (let i = 0; i < arr.length; i++) {
        let inserted = false

        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] === arr[i]) {
                inserted = true
                break
            }
        }

        if (!inserted) {
            numbers.push(arr[i])
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        let times = 0

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === numbers[i]) {
                times++
            }
        }

        for (let k = 0; k < occurrences.length; k++) {
            if (occurrences[k] === times) {
                return false
            }
        }

        occurrences.push(times)
    }



    return true
}

console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))