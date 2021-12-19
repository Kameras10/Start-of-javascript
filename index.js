// greet("Josh ", "Survival ", "22 ", "Michigan ", "How was your journey?"); // example of hoisting
//                Function is a block of code to do something that can be invoked and run at any point in code
// // Object - Arrays, Object Literals, Functions, Dates etc
// // Function does particular thing 
// // Defining the code inside the function once but can rut it as many times as you want
// //  {} - code block for the function and when code is called this is what going to get executed
// // Difference is no difference between function declaration/expression apart of hoisting
// // hoisting only works with function declaration and not expression (hoists to the top)
// // hoisting can let you run function even if its written after its been called
// // Does not impose good coding practise when you are declaring things (best to first declare function and then use it)
// // can end up with mashup of functions and calls all over the place

//            // function declaration (no variable)
// function greet(name, lastName, age, city, question){ // paremeters()
//     console.log("Hello " + name + lastName + age + city + question); // parameters()
// }
//            // Function expression (with variable)
// const speak = function(name = `luigi`, time = `night`){ // = give parameters default value in case the function is invoked without passing antything in
//     console.log(`good ${time} ${name}`);
// };
// speak(); // if () are empty you get undefined unless parameters have default value
// speak(`mario`); // the moment arguments are input, default value are overridden
// greet("Josh ", "Survival ", "22 ", "Michigan ", "How was your journey?"); // argument ()
// greet("Kentucky ", "Ubguva ", "42 ", "Kentuccky ", "How was your journey?"); // argument ()
// // order of arguments must match the parameters (line 17 to line 20, firt name, then time)

//                            // returning values from functions
// const calcArea = function(radius){
//     return 3.14 * radius**2; // returned directly instea of (let area = 3.14 * radius**2)
//     // return area;
// }
// const a = calcArea(5); // stored value that got back (a=area)
// console.log(a);
                        // arrow function
const calcArea = radius => 3.14 * radius**2; // this only works when there is only sinlg return line, even if {} and return is removed it still returns the value
// { // when having only 1 parameter () can be taken away, likewise if there is no parameter () are needed
//     return 3.14 * radius**2 
// }; //arrow function version of regular function / just a newer and shorter way to write functions

// const area = calcArea(5);
// console.log(`area is:`, area);


                    // practise arrow functions
// // const greet = function(){
// //     return 'hello, world'
// // };
// const greet = () => 'hello, world'
// const test = greet();
// console.log(test);

// // const greet = console.log('hello, world'); //          ----------

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// const bill = (products, tax) => {
// let total = 0;
// for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
// }
// return total;
// };

// console.log(bill([10,15,30], 0.2))
// Method is pretty similar to a function, difference is the way that it is invoked and where it is defined

const name = 'Shaun';
// function
const greet = () => 'hello';
let resultOne = greet();
console.log(resultOne);
// method (methods are functions that are associated with an object or data type like string)
let resultTwo = name.toUpperCase()
console.log(resultTwo)