const intersect = (nums1, nums2) => {
    const result = []

    for (let i = 0; i < nums1.length; i++) {
        const value = nums1[i]
        let times = 1
        let second = 0

        for (let j = 0; j < nums2.length; j++) {
            if (nums2[j] === value) {
                second++
            }
        }

        if (second >= 1) {
            for (let k = i + 1; k < nums1.length; k++) {
                if (value === nums1[k]) {
                    times++
                }
            }

            if (second > times) {
                second = times
            } else if (times > second) {
                times = second
            }

            const aux = Math.floor((times + second) / 2)

            let hasInserted = false

            for (let l = 0; l < result.length; l++) {
                if (result[l] === value) {
                    hasInserted = true
                    break
                }
            }

            if (!hasInserted) {
                for (let m = 0; m < aux; m++) {
                    result.push(value)
                }
            }


        }

    }


    return result
}

console.log(intersect([4,9,5], [9,4,9,8,4]))