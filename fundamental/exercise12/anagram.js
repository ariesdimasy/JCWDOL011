function anagram(s, t) {
    let s2 = s.split("").sort().join("")
    let t2 = t.split("").sort().join("")
    if( s2 != t2) {
        return false
    }

    return true
}

console.log(anagram("tcat","cat"))
console.log(anagram("dimas","samid"))