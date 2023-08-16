function multiDimensi(arr) {
    let result = 0
    for(let i = 0; i < arr.length; i++) {
        let row = 0
        for(let j = 0; j < arr[i].length; j++ ) { 
            row += arr[i][j]
        }
        result += row
    }

    return result
}
0
console.log(multiDimensi([
    [1,2,3],
    [3,4],
    [1],
    [4,3,5],
    [5,6,2,6],
]))