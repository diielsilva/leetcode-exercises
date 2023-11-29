class RecentCounter {
    requests = []
    last = -1

    ping(t) {
        this.last++
        this.requests[this.last] = t

        let count = 0
        const start = this.requests[this.last] - 3000

        for (let i = this.last; i >= 0; i--) {
            if (this.requests[i] >= start) {
                count++
            } else {
                break
            }
        }

        return count
    }
}

const counter = new RecentCounter()

console.log(counter.ping(1), counter.ping(100), counter.ping(3001), counter.ping(3002))