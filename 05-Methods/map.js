/* 
Accepts a callback and applies that function to each element of an array, 
then return a new array
*/

const numbers = [1,2,3,4,5];
const squares = numbers.map(squares);

function squares (element){
	return Math.pow(element, 2);
}

console.log(squares);


const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);

function upperCase (element) {
		return element.toUpperCase();
}

console.log(studentsUpper);


const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const datesFormat = dates.map(formatDates);

function formatDates(element){
	const parts = element.split("-");
	return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

console.log(datesFormat);

