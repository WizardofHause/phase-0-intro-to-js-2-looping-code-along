for (let age = 30; age < 40; age++) { //for ([initialization]; [condition]; [iteration])
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
//use a FOR loop when you know EXACTLY how many times you want the loop to run
//let age=30; creates variable AGE using LET so we can increment the value of AGE
//age<40; communicates "run the code in the loop body until age is NOT less than 40"
//age++; increases the value of age by 1 with each iteration over the loop.


const gifts = ['teddy bear', 'drone', 'doll'];
//makes an array with 3 strings set equal to the variable *gifts*
//so we can use *gifts* as a placeholder for the array and insert it 
//as a parameter into a looping function
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
//Starting at INDEX 0 (i=0) --> INITIALIZATION, 
//until *i* is greater than the return value of *gifts.length*
//return the code below...
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts; 
    //need to return the array so it can be looped again
    //until our index is a greater value than the length of our array
}
wrapGifts(gifts);

const names = ['Charlie', 'Samip', 'Ali'];
//function that creates a new array with let messages = []
//for each name in the NAMES array, it creates a message and adds that 
//message to the array MESSAGES
function writeCards(names, e) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${e} gift!`);
    }
    return messages;
}

function countDown (x) {
    while (x > 0) {
        console.log(x);
        x-=1;
    }
    console.log(x);
}