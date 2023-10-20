function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const addTwoNumbers = (l1, l2) => {
    let first = ''
    let second = ''

    let aux1 = l1
    let aux2 = l2

    while (aux1 != null) {
        first += aux1.val.toString()
        aux1 = aux1.next
    }

    while (aux2 != null) {
        second += aux2.val.toString()
        aux2 = aux2.next
    }

    let numberOne = ''
    let numberTwo = ''

    for (let i = first.length - 1; i >= 0; i--) {
        numberOne += first[i]
    }

    for (let i = second.length - 1; i >= 0; i--) {
        numberTwo += second[i]
    }

    const resultNumber = BigInt(numberOne) + BigInt(numberTwo)
    const resultString = resultNumber.toString()

    let resultList = new ListNode(Number.parseInt(resultString[resultString.length - 1]))

    for (let i = resultString.length - 2; i >= 0; i--) {
        let aux = resultList;

        while (aux.next != null) {
            aux = aux.next
        }
        aux.next = new ListNode(Number.parseInt(resultString[i]))

    }


    return resultList

}


// let aux = resultList

// while (aux != null) {
//     console.log(aux.val)
//     aux = aux.next
// }
// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))


addTwoNumbers(l1, l2)