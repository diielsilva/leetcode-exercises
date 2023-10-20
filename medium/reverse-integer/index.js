const reverse = (x) => {
    if (x > -10 && x < 10) {
        return x
    } else {
        let numberString = x.toString()
        let aux = ''
        let result = ''

        for (let i = numberString.length - 1; i >= 0; i--) {
            aux += numberString[i]
        }

        let lastNumberIndex = null;

        for (let i = 0; i < aux.length; i++) {
            if (aux[i] != '0') {
                lastNumberIndex = i
            }
        }



        if (lastNumberIndex != null && lastNumberIndex < aux.length - 1) {
            for (let i = 0; i <= lastNumberIndex; i++) {
                result += aux[i]
            }
        } else {
            for (let i = 0; i < aux.length; i++) {
                result += aux[i]
            }
        }

        let finalValue = result[result.length - 1] == '-' ? Number.parseInt(result) * -1 : Number.parseInt(result)

        if (finalValue > 2147483647 || finalValue < -2147483648) {
            return 0
        }

        return finalValue
    }
}

console.log(reverse(-123))