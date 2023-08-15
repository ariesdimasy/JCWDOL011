function weekend(date) { 
    //console.log(new Date(date).getDay())
    return new Date(date).getDay() === 6 || new Date(date).getDay() === 0 ? "weekend" : "weekdays"
}

console.log(weekend("2022-11-10")) // 4
console.log(weekend("2022-11-13")) // 0
console.log(weekend("2022-11-14")) // 6
console.log(weekend("2022-11-15"))
console.log(weekend("2022-11-16"))
console.log(weekend("2022-11-17"))
console.log(weekend("2022-11-19"))