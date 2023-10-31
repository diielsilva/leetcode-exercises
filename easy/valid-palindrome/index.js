const isCharLetter = (char) => {
    const num = Number.parseInt(char)

    if (Number.isInteger(num)) {
        return true
    }

    return /^[a-z]$/i.test(char);
}

const isPalindrome = (s) => {
    let cleaned = ''
    let result = ''

    for (let i = 0; i < s.length; i++) {

        if (isCharLetter(s[i])) {
            cleaned += s[i].toLowerCase()
        }
    }

    for (let i = cleaned.length - 1; i >= 0; i--) {
        result += cleaned[i]
    }

    return cleaned === result
}

console.log(isPalindrome('0z;z   ; 0'))

