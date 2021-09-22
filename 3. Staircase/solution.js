const staircase = n => {
    let stairs = new Array(n).fill(' ')
    while (stairs.indexOf(' ') !== -1) {
        stairs.shift()
        stairs.push('#')
        console.log(stairs.join(""))
    }
}

console.log(staircase(6))