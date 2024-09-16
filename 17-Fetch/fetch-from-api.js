/*
Fetch in javascript is a function used for making HTTP requests to fetch resources. (JSON style data, images, files)

Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send data asynchronosuly over the web. fetch(url, {options})

Options: POST, GET, ETC.
*/




fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => console.log(response))
.catch(error => console.error(error));

//Now our next step is to take our response object convert it to Json
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => response.json())
.then(data => {console.log(data); console.log(data.name)}) //With this Json data you can access one of the properties
.catch(error => console.error(error));

//We're going to throw an error if our property of okay is false 
//Within our first then method We'll write a few statements
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => {
	
    if(!response.ok){
        throw new Error("Couldn't fetch resource");
    }
    return response.json();
})
.then(data => {console.log(data); console.log(data.name)}) //With this Json data you can access one of the properties
.catch(error => console.error(error));


//If you would prefer to use a sync and await, here's how:



fetchData();

async function fetchData(){
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        if(!response.ok){
            throw new Error("Couldn't fetch resource");
        }

        const data = await response.json();
        console.log(data.name);

    } catch(error){
        console.error(error);
    }
}