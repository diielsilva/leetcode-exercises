function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const insertionSortList = (head) => {
    let aux1 = head.next

    while (aux1 !== null) {
        const value = aux1.val
        let previous = []
        let aux2 = head

        while (aux2 !== aux1) {
            previous.push(aux2)
            aux2 = aux2.next
        }

        let i = previous.length - 1


        for (i; i >= 0; i--) {
            if (value < previous[i].val) {
                previous[i].next.val = previous[i].val
                previous[i].val = value
            } else {
                break
            }
        }

        aux1 = aux1.next

    }

    return head

}

const list = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(4))))

console.log(insertionSortList(list))