const singleNumber = (nums) => {

    for (let i = 0; i < nums.length; i++) {
        let times = 0

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                times++

                if (times > 1) {
                    break
                }

            }
        }

        if (times === 1) {
            return nums[i]
        }
    }

    return 0
}

console.log(singleNumber([2, 2, 1]))