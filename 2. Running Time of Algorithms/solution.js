const array = [2, 1, 3, 1, 2]

const runningTime = arr => {
    let shiftCount = 0

    for (let i = 0; i <= arr.length - 1; i++) {
        let value = arr[i]

        while (arr[i - 1] > value) {
            arr[i] = arr[i - 1]
            shiftCount += 1
            i -= 1
        }

        arr[i] = value
    }

    return shiftCount
}

console.log(runningTime(array))