//functions, functions(), => functions

//we can pass a string as an argument
//console.log(`i am really tired!`);

//we can also pass a binding to a function

// const catName = `Brett`
// console.log (`My cat's name is ${catName}!`)

//functions within functions
// console.log (Math.pow(2,64))


//Here's a function we made to calculate x to the power of y
// const power = function(base, exponent) {
 //definea variable to store our result
//     let result = 1;
    
//     for( let i = 0; i < exponent; i++){
//         result *= base;
//     }

//     return result; 
// }

// console.log(power(10,10));

// console.log (Math.random());

//our lucky draw
// console.log(Math.floor(Math.random() * 21));

//array of colors 
// const colors = [{}]

// console.log(Math.floor(Math.random() * colors))

//volume of a cube
// const volumeOfCube = function(length) {
//     return length * length * length;
// }

// console.log(volumeOfCube(10));

// let coffeeOrder = function makeCoffee(name, AoI, amount, cups, kind){
//     //put some code to make coffee here
//     console.log(`Hello ${name}, here ${AoI} your ${amount} ${cups} of ${kind}!`)
// }

// coffeeOrder('Brett', `is`, 1, `cup`, `latte`);

// let d = x => x * 2

// console.log(d(2));

let makeCoffee = (quantity, coffeeStrength) => {
    switch(coffeeStrength) {
        case `Strong`: {console.log(`grind ${quantity * 5} pounds of beans`)};
        break;

        case `Medium`: {console.log(`grind ${quantity * 3} pounds of beans`)};
        break;
    }
}

makeCoffee(3, `Medium`);

