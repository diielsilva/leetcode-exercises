const searchRange = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {

            let pos = -1


            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] === nums[i]) {
                    pos = j
                }
            }

            if (pos === -1) {
                return [i, i]
            } else {
                return [i, pos]
            }

        }
    }

    return [-1, -1]
}

console.log(searchRange([], 0))