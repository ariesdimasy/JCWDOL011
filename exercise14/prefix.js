function prefix(arr) {
    let match = true
    let result = ""
    let i = 0
    while(match) { 
        let samplePrefix = arr[0][i]

        for(let j = 1; j < arr.length; j++) { 
            if(samplePrefix != arr[j][i]) { 
                return result
            }
        }

        result += samplePrefix

        i++
    }
}

console.log(prefix(["car", "cat", "cattle"])) // ca
console.log(prefix(["car", "bar", "battle"]))
console.log(prefix([
    "JCWD2404",
    "JCWD2504",
    "JCWD2500",
    "JCDM2000",
    "JCDM2001",
    "JCWD2501",
  ]))
  console.log(prefix(["apple", "app", "apricot"])); // Output: "ap"
  console.log(prefix(["car", "cat", "cattle"])); // Output: "ca"
  console.log(prefix(["race", "rack", "radio"])); // Output: "ra"
  console.log(prefix(["hello", "world"])); // Output: ""