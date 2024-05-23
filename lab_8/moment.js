var moment = require('moment'); // require
moment().format(); 

// get days from birth
let birthdate = moment("02:03:2002", "dd:MM:YYYY");
let now = moment();
console.log("----#1----");
console.log(now.diff(birthdate, 'days'));

// get age in years, months, and days
let age = moment("02:03:2002", "dd:MM:YYYY");
let years = now.diff(age, 'years');
age.add(years, 'years');
let months = now.diff(age, 'months');
age.add(months, 'months');
let days = now.diff(age, 'days');
console.log("----#2---");
console.log(`${years} years, ${months} months, ${days} days`);

// get closest date to now
let date1 = moment("05:01:2018", "dd:mm:yyyy")
let date2 = moment("24:06:2030", "dd:mm:yyyy")

let closestDate = Math.abs(now.diff(date1)) < Math.abs(now.diff(date2)) ? date1 : date2
console.log("----#3----");
console.log(closestDate);

// is date 3 before date 4 ?
let date3 = moment("05:01:2018", "dd:mm:yyyy")
let date4 = moment("24:06:2018", "dd:mm:yyyy")

console.log("----#4----");
console.log("Is date 3 before date 4? " + date3.isBefore(date4))

// current time in London
let LondonDate = now.utcOffset(1);
console.log("----#5----");
console.log(LondonDate.format('hh:mm:ss'))