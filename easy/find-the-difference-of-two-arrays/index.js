/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
    const answer = []
    const first = []
    const second = []

    for (let i = 0; i < nums1.length; i++) {
        let contains = false

        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                contains = true
                break
            }
        }

        if (!contains) {
            let unique = true

            for (let k = 0; k < first.length; k++) {
                if (first[k] === nums1[i]) {
                    unique = false
                    break
                }
            }

            if (unique) {
                for (let l = 0; l < second.length; l++) {
                    if (nums1[i] === second[l]) {
                        unique = false
                        break
                    }
                }
            }

            if (unique) {
                first.push(nums1[i])
            }

        }

    }

    for (let i = 0; i < nums2.length; i++) {
        let contains = false

        for (let j = 0; j < nums1.length; j++) {
            if (nums2[i] === nums1[j]) {
                contains = true
                break
            }
        }

        if (!contains) {
            let unique = true

            for (let k = 0; k < second.length; k++) {
                if (nums2[i] === second[k]) {
                    unique = false
                    break
                }
            }

            if (unique) {
                for (let l = 0; l < first.length; l++) {
                    if (nums2[i] === first[l]) {
                        unique = false
                        break
                    }
                }
            }

            if (unique) {
                second.push(nums2[i])
            }

        }
    }

    answer.push(first, second)

    return answer
}

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]))