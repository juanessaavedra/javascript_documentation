/* 
JavaScript object notation. Data-interchange format used for exchanging data between a server and a web application.

JSON files {key: value} OR [value1, value2, value3]

JSON.stringify() = convert a JS object to a JSON string.

JSON.parse() = converts a jSON string to a JS Object
*/


/* To convert JSON to String: */



const names = ["Spongebob", "Patrick", "Squidward"];
const person = {
	"name": "Spongebob",
	"age": 30,
	"isEmployed": true,
	"hobbies": ["Jellyfishing", "karate", "cooking"]
}

const people = [{
	"name": "Spongebob",
	"age": 30,
	"isEmployed": true
},
	{"name": "Patrick",
	"age": 34,
	"isEmployed": false},
	{
		"name": "Squidward",
	"age": 50,
	"isEmployed": true
	}
]

const jsonstring = JSON.stringify(names);
console.log(jsonstring);


const jsonString1 = JSON.stringify(person);
console.log(jsonString1);


const jsonString2 = JSON.stringify(people);
console.log(jsonString2);

/* Now, to convert String to Json: */



const jsonNames = `["Spongebob", "Patrick", "Squidward"]`;
const jsonPerson = `{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishing", "karate", "cooking"]}`;

const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
	{"name": "Patrick","age": 34,"isEmployed": false},
	{"name": "Squidward","age": 50,"isEmployed": true}]`;

const parsedDataNames = JSON.parse(jsonNames);
console.log(parsedDataNames);

const parsedDataPerson = JSON.parse(jsonPerson);
console.log(parsedDataPerson);

const parsedDataPeople = JSON.parse(jsonPeople);
console.log(parsedDataPeople);
