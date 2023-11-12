const isIsomorphic = (s, t) => {
    const mapped = []
    let result = ''

    for (let i = 0; i < s.length; i++) {
        let inserted = false
        const obj = {
            value: s[i],
            map: t[i]
        }

        for (let j = 0; j < mapped.length; j++) {
            if (s[i] === mapped[j].value || obj.map === mapped[j].map) {
                inserted = true
                break
            }
        }

        if (!inserted) {
            mapped.push(obj)
        }

        for (let k = 0; k < mapped.length; k++) {
            if (s[i] === mapped[k].value) {
                result += mapped[k].map
                break
            }
        }

    }

    return result === t
}

console.log(isIsomorphic('egg', 'add'))