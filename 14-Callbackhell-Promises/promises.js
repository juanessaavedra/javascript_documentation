/* 
An object that manages asynchronous operations. Wrap a Promise Object around (aynchronous code) “I promise to return a value”

Pending → RESOLVED or REJECTED

new Promise ((resolve, reject) ⇒ {asynchronous code)

Do these chores in order

1. Walk the dog
2. Clean the kitchend
3. Take out the trash
*/

/*
function walkDog() {
    setTimeout(() => {
        console.log("You walk the dog");
    }, 1500);
}

function cleanKitchen() {
    setTimeout(() => {
        console.log("You clean the kitchen");
    }, 2500);
}

function takeOutTrash() {
    setTimeout(() => {
        console.log("You take out the trash");
    }, 500);
}
*/

/*


function walkDog(callback) {
    setTimeout(() => {
        console.log("You walk the dog");
        callback();
    }, 1500);
}

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log("You clean the kitchen");
        callback();
    }, 2500);
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log("You take out the trash");
        callback();
    }, 500);
}

walkDog(() => { //If we have a lot of callbacks to work with we'll end up going to callback hell
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("You finished all the chores! ")
        })
    })
})
*/

/* PROMISES: */



function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walk the dog");
        }, 1500);
    })
}

function cleanKitchen() {
    return new Promises ((resolve,reject) => {
        setTimeout(() => {
            resolve("You clean the kitchen");
            
        }, 2500);
    })
    
}

function takeOutTrash() {
    return new Promises ((resolve, reject) => {
        setTimeout(() => {
            resolve("You take out the trash");
        }, 500);
    })
    
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log("You finished all the chores!");});


/*
By method chaining then methods its a lot easier to write than nesting call backs 
  Now sometimes with asynchronous functions depending on the task the task may fail
  Let's say we're trying to locate a resource a file If we can't locate that file and we're using promises, we don't want to resolve that promise
   Because we  could'nt locate that file 
  Instead we want to reject that's what happens when a asynchronous function fails to do something when inside a promise 

So let’s change our functions around :
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

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log("You finished all the chores!");})
        .catch(error => console.error(error)); //New

        