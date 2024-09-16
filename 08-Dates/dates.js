/* 
Objects that contain values that represent dates and times.

These date objects can be changed and formatted
*/

const date = new Date();
const year = date.getFullYear();
const month = date.getmonth();
const day = date.getDay();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(date); //My current time
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

//Also you can set the Date

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1); //set day
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);


//Date(year, month, day, hour, minute, second, ms)

const date1 = new Date (2024, 0, 1, 2, 3, 4, 5);
console.log(date);

const date2 = new Date("2024-01-02T12:00:00Z");
console.log(date2);

const date3 = new Date(0) //0 seconds 
const date4 = new Date(170000000); //Before 17 billion seconds




//Compare dates:

const date5 = new Date("2023-12-31");
const date6 = new Date ("2024-01-01");

if (date2 > date1) {
	console.log("HAPPY NEW YEAR!");
}