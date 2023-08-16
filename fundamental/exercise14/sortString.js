function sortString(arr) { 
    for(let i = 0; i < arr.length; i++) { 
        let temp = null
        for (let j = 0; j < arr.length; j++) { 
            if(arr[i][0] < arr[j][0]) { 
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

console.log(sortString(["YUDHISTIRA","ARIES","DIMAS"]))