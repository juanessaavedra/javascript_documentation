/* 
Async = Makes a function return a promise

Await = Makes an async function wait for a promise

Allows you write asynchronous code in a synchronous manner.

Async doesnt have resolve or reject parameters

Everything after await is placed in an event queue

The same code as above:
*/


function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const dogWalked = true;
                if(dogWalked){
                    resolve("You walk the dog");
                } else {
                    reject("You didn't walk the dog");
                }
            
        }, 1500);
    })
}

function cleanKitchen() {
    return new Promises ((resolve,reject) => {
        setTimeout(() => {
            const kitchenCleand = true;
            if(kitchenCleand){
                resolve("You clean the kitchen");
            } else {
                reject("You dind't clean the kitchen");
            }
            
            
        }, 2500);
    })
    
}

function takeOutTrash() {
    return new Promises ((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true; //New
            if(trashTakenOut){
                resolve("You take out the trash");
            } else {
                reject("You dind't take out the trash"); //New
            }
            
        }, 500);
    })
    
}


async function doChores(){
    try{
        const walkDogResult = await walkDog(); //await depends of async function
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen(); //async function wait for a promise
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash(); //await makes an async function wait for a promise
    console.log(takeOutTrashResult);

    console.log("You finished all the chores!");

    } catch (error){
        console.error(error);
    }
}

//By using these two keywords together we can write asynchronous code in a synchronous manner 
        