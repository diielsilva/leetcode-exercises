const canJump = (nums) => {

    let index = 0
    let jumps = nums[index]
    const length = nums.length - 1

    if(jumps >= length) {
        return true
    }

    while (jumps > 0 && index < nums.length) {
        if (index + jumps >= length) {
            return true
        }

        index++
        jumps--

        if (nums[index] > jumps) {
            jumps = nums[index]
        }

    }

    return false
}

console.log(canJump([2,3,1,1,4]))