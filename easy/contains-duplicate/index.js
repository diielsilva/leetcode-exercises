const containsDuplicate = (nums) => {

    for (let i = 0; i < nums.length; i++) {
        const selected = nums[i]

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === selected) {
                return true
            }
        }
    }

    return false
}

console.log(containsDuplicate([1, 2, 3, 4]))