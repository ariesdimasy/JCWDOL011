function minimumDate(dates) { 
    let minDate = new Date(dates[0])

    for(let i = 1; i < dates.length; i++) { 
        if(minDate  > new Date(dates[i])) {
            minDate = new Date(dates[i])
        }
    }

    return minDate

}

console.log(minimumDate(['2022-10-05','2010-09-10', '1998-10-12','2001-06-04']))