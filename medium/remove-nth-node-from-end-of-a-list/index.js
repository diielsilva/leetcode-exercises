function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const removeNthFromEnd = (head, n) => {
    let aux = head
    let length = 0

    while (aux !== null) {
        length++
        aux = aux.next
    }

    if (length === 1 && n === 1) {
        head = null
    } else {
        let index = 0
        const stop = length - n
        let previous = null

        aux = head

        if(stop === 0) {
            head = head.next
        } else {

            while (index !== stop) {
                index++
                previous = aux
                aux = aux.next
            }
    
            previous.next = aux.next
        }

    }

    return head

}

const list = new ListNode(1, new ListNode(2))

console.log(removeNthFromEnd(list, 2))



