function matrixTranspose(arr) {

    let result = [];
    for (let i = 0; i < arr[0].length; i++) {
        result[i] = [];
        for (let j = 0; j < arr.length; j++) {
            result[i].push(arr[j][i]);
        }
    }
    return result;
 
}
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

console.log(matrixTranspose(matrix)); // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
