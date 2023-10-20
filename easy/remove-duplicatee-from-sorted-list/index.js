function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


const deleteDuplicates = (head) => {
    let aux = head;

    while (aux != null) {
        let previous = aux;
        let actual = aux;
        let value = actual.val;

        while (actual.val == value && actual.next != null) {
            actual = actual.next;
        }

        if (actual.val == value) {
            previous.next = null;
            aux = null;
        } else {
            previous.next = actual;
            aux = actual;
        }

    }

    return head;
}

const list = new ListNode(1, new ListNode(1, new ListNode(2)))

console.log(deleteDuplicats(list));