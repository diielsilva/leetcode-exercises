const intersection = (nums1, nums2) => {
    const result = []

    for (let i = 0; i < nums1.length; i++) {
        const value = nums1[i]

        for (let j = 0; j < nums2.length; j++) {
            if (value === nums2[j]) {

                let alreadyPushed = false

                for (let k = 0; k < result.length; k++) {
                    if (value === result[k]) {
                        alreadyPushed = true
                        break
                    }
                }

                if (!alreadyPushed) {
                    result.push(value)
                }

            }
        }
    }

    return result
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))