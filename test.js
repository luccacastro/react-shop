
console.log(true == 0)

let a = {
    valueOf() {
        return 0
    }
}

console.log(a.valueOf())