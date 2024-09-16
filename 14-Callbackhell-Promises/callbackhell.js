/*
Situation in javascript where callbacks are nested within other callbacks to the degree where the code
 is difficult to read. Old pattern to handle asynchronous functions. Use promises + async/await to avoid Callback Hell

function task1(){
    console.log("Task 1 complete");
}

function task2(){
    console.log("Task 2 complete");
}

function task2(){
    console.log("Task 2 complete");
}

function task3(){
    console.log("Task 3 complete");
}

function task4(){
    console.log("Task 4 complete");
}
task1();
task2();
task3();
task4();
console.log("All tasks complete");

 */

/* ASYNCHRONOUS:

function task1(){
    setTimeout(() =>console.log("Task 1 complete"), 2000);
}

function task2(){
    setTimeout(() =>console.log("Task 2 complete"), 1000);
}

function task3(){
    setTimeout(() =>console.log("Task 3 complete"), 3000);
}

function task4(){
    setTimeout(() =>console.log("Task 4 complete"), 1500);
}

task1();
task2();
task3();
task4();
console.log("All tasks complete"); //So thats the problem with asynchronous code these can complete at any time 
//The rest of our program doesnt wait around for them to finish 

*/

/* CALLBACKHELL: */


function task1(callback){
    setTimeout(() =>console.log("Task 1 complete"), 2000);
}

function task2(callback){
    setTimeout(() =>console.log("Task 2 complete"), 1000);
}

function task3(callback){
    setTimeout(() =>console.log("Task 3 complete"), 3000);
}

function task4(callback){
    setTimeout(() =>console.log("Task 4 complete"), 1500);
}


task1(() => { //We've done is use callback hell its where you're nesting callbacks inside of other If you have a lot of tasks to complete it can become very unman manageable  
    task2( () => {
        task3(() => {
            task4(() => {
                console.log("All tasks complete");
            })
        })
    });
})

//Four levels of callbacks isn't too unreasonable but when you add additional levels on top of that that's when you're starting to approach the levels of callback hell where the code can become unmanageable and really difficult to read 


/*
4 o más funciones anidadas: Esto generalmente se considera un "callback hell" y debería evitarse, ya que dificulta el seguimiento del flujo lógico y el manejo de errores.

Para evitar el "callback hell", se recomienda utilizar alternativas como:

1. Promesas (`Promises`): Ayudan a aplanar la estructura de las callbacks.
2. `async/await`: Hace que el código asíncrono se vea y se comporte de manera más similar al código síncrono.
3. Funciones puras y modularización**: Extraer funciones independientes y reutilizables.
*/




