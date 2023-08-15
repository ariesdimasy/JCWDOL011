function commonCharacter(str) { 
    let char = null
    let charMax = 0
    for(let i = 0; i < str.length; i++) { 
        let charCount = 0
        for(let j = 0; j < str.length; j++) { 
            if(str[i] === str[j] && i !== j) { 
                charCount += 1
            }
        }

        if(charCount > charMax) { 
            charMax = charCount
            char = str[i]
        }

    }

    return char
}

console.log(commonCharacter("YUDHISTIRA"))
console.log(commonCharacter("ARIES DIMAS YUDHISTIRA"))
console.log(commonCharacter("PURWADHIKA BOOTCAMP SCHOOL"))

/*

    YUDHISTIRA

    YUDHISTIRA
*/