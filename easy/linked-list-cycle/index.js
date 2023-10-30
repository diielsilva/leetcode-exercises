function ListNode(val) {
    this.val = val;
    this.next = null;
}

const hasCycle = (head) => {
    const nodes = []

    let aux = head

    while (aux !== null) {
        nodes.push(aux)

        for (let i = 0; i < nodes.length; i++) {
            if (aux.next !== null && aux.next === nodes[i]) {
                return true
            }
        }

        aux = aux.next
    }

    return false

}
