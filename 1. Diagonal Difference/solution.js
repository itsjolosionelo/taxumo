const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

const diagonalDifference = arr => Math.abs(arr.reduce((sum, row, index) => sum += row[index] - row[row.length - 1 - index], 0))

console.log(diagonalDifference(matrix))