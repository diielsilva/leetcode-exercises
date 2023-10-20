const sortColors = (nums) => {

    for (let i = 1; i < nums.length; i++) {
        const value = nums[i]
        let j = i - 1;

        for (j; j >= 0; j--) {
            if (nums[j] > value) {
                nums[j + 1] = nums[j]
                nums[j] = value
            } else {
                break
            }
        }
        
        nums[j + 1] = value
    }
}

sortColors([2,0,2,1,1,0])