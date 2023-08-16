function singelInteger(arr) { 
    let result = null
    for(let i = 0; i < arr.length; i++) { 
        let isSame = false
        for(let j = 0; j < arr.length; j++) { 
            if(i != j && arr[i] == arr[j]) { 
                isSame = true 
                break
            }
        }

        if(!isSame) { 
            result = arr[i]
        }
    }

    return result
}

console.log(singelInteger([1,2,2]))
console.log(singelInteger([4,1,2,1,2,3]))
console.log(singelInteger([1,2,1,2,4]))
console.log(singelInteger([4,1,2,1,2]))


// [1,2,2]

// [1,2,2]

// [1]