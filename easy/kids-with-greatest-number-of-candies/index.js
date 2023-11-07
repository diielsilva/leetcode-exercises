const kidsWithCandies = (kids, extraCandies) => {
    let greatest = 0
    const result = []

    for (let i = 0; i < kids.length; i++) {
        if (kids[i] > greatest) {
            greatest = kids[i]
        }
    }

    for (let i = 0; i < kids.length; i++) {
        if (kids[i] + extraCandies >= greatest) {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    return result
}
