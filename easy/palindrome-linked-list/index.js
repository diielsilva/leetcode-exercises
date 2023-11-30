function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const isPalindrome = (head) => {
    let forward = ''

    let aux = head

    while (aux !== null) {
        forward += aux.val
        aux = aux.next
    }

    let backward = ''

    for (let i = forward.length - 1; i >= 0; i--) {
        backward += forward[i]
    }

    return backward === forward
}

const l1 = new ListNode(1, new ListNode(2))

console.log(isPalindrome(l1))