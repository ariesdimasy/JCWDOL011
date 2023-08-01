console.log("Triangle");
let angle1 = 10;
let angle2 = 20;
let total = 180;

let result = total - (angle1 + angle2);

console.log(result);

console.log("Date Difference");
let date1 = new Date("2023-10-09");
let date2 = new Date("2022-02-03");

let result2 = (date1 - date2) / (24 * 60 * 60 * 1000);

console.log(result2);

console.log("convert days");

let days = 100;
let year = 365;
let month = 30;

let years = Math.floor(days / year);
let months = Math.floor((days % year) / month);
let days2 = (days % year) % month;

console.log(years, " years ", months, " months ", days2, " days ");
