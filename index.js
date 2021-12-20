// Variables - gives a way to store a value: (name, age or whatever) and use that value whenever you want
// let = age = 25; // age - variable 
// let = year = 2019; // year - variable
// console.log(age, year);
// // Let - value can be changed 
// age = 30;
// console.log(age)

// const points = 100; // Const - value of this variable going to stay the same throughout the whole program
// // points = 50; //Uncaught TypeError: Assignment to constant variable. at index.js:10
// console.log(points);

// var score = 75; // Var old way to use variables 
// console.log(score);
// Variables cant have any spaces, usecamo case(myNameIs)
// Variables can contain only letters, numbers, underscores or dollar signs but they can't start with a number
// but it can start with any of those other things
// Reserved keywords can't be used like: let/const
// Making meangful name, helps to better understand the code for yourself/others
// /* */ multi-line comments
// Javascript is 0 based language it counts from 0 up and not from 1

//             JavaScript Data Types
// Numbers: 1, 2 3, 100, 3.14
// String 'hello, world' "shuma@shamuna.co.uk
// Boolean - true / false, used for evaluating conditions
// Null - Explicitly set a variable with no value 
// Undefined for variables that have not yet been defined, automatically given
// Object Complex date structures - Arrays, Dates, Literals etc
// Symbol - Used with objects

//            Strings - used to store letter, numbers or other charachters
// strings are serias of letters, numbers and characters in qoutes, they have properties and they also have methods that built in snippets in code
// console.log('Hello, world');

// let email = "thom@hasdhsah.co.uk";
// console.log(email);
// //           string concatenation - joining strings together
// let firstName = 'Thomas';
// let lastName = 'Bubber';
// let fullName = firstName + ' ' + lastName; // '' added so there is a space between firstName and lastName // 3 things concatenated in there
// console.log(fullName);
// //            getting characters
// console.log(fullName[0]); // T  letter from  firstName Thomas is 0, 2 is o
// //            string length
// console.log(fullName.length); // gets full length of that string
// //            string methods - pretty much a function associated with a particular object or data type
// console.log(fullName.toUpperCase()); // add () at the end
// let result = fullName.toLowerCase(); 
// console.log(result, fullName);
// // Some methods alter the original value and some don't
// let index = email.indexOf('@'); // @ is a an argument / when value is passed into the method 
// console.log(index);
//             Common string methods
// let email = "apple@gmail.com";

// // let result = email.lastIndexOf('@'); // =5 / lastIndexOf () finds the last character in that particual string
// // let result = email.slice(0,10); // slices that section from 0 to position 10 (apple@gmai) / first argument where we go from so 0 and the second where to so 10
// // let result = email.substr(4,10); // Simmilar to slice but instead of cutting it at the 10 characters it goes 10 instead (e@gmail.co)
// // let result = email.replace('a', 'g'); // replaces the letter (a) with (g)
// let result = email.replace('p','g'); // only replaces the first p it comes up to and does not change the others
// console.log(result);

//                Numbers
// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);
// math operators +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2; //formula for working area of a circle

//order of operation - B I D M A S

// let result = 5 * (10-3)**2;
// console.log(result);

// let likes = 10;

// // likes = likes +1;
// // likes++; // short hand operation ++ same as adding 1 like above
// // likes--; 

// // likes += 10; // adds 10, same can be done for - and etc
// // likes -= 5;
// // likes *= 2;
// // likes /= 2;
// //Short hand notations, quicker way when doing little calculations
// // console.log(likes);

// //NaN - not a number

// // console.log( 5 / 'hello '); - get NaN

// let result = 'the blog has ' + likes + ' likes'; //string
// console.log(result);

//        template strings
// const title = 'Big ben 2021';
// const author = 'Harry potah';
// const likes = 2000;
// // another name for template strings is template literal
// //         concatenation way
// // let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';
// // console.log(result);
// //         template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`; // looks better and quicker // `` - used for template string, (`` - below esc)
// console.log(result);

// //         creating html templates
// let html = `
// <h2>${title}</2h2>
// <p>By ${author}</p>
// <span> This blog has ${likes} likes</span>
// `;
// console.log(html);

// Arrays type under the object data type, usually used to store collection of things in like collection of strings or numbers

let ninjas = ['Shaun', 'Ryu', 'Chun-Li'];// Array with 3 elements/values inside it // [] - array syntax

// ninjas[1] = 'Ken';
// console.log(ninjas[1]); // get Shaun if [2] used inside would get Chun-Li and if there is no [] get all 3

// let ages = [20,25,30,35];
// console.log(ages[2]);
// let random = ['Shaun', 'crystal', 30, 20]; // not limited to storing one thing
// console.log(random[1]);

// Arrays like strings like number have properties and methods

// console.log(ninjas.length); // outputs 3 because it counts how many elements inside that array (['Shaun', 'Ryu', ' Chun-Li'])

// array methods

// let result = ninjas.join('-'); // takes array ninjas in this case and it joins all the elements inside with a (-) in this case
// let result = ninjas.indexOf('Chun-Li'); // 2
// let result = ninjas.concat(['ken', 'crystal']); // concat  joining things together like 2 arrays // ['Shaun', 'Ryu', 'Chun-Li', 'ken', 'crystal']
let result = ninjas.push('ken'); // returns the lenght of the new array // So 4 with ken added
result = ninjas.pop(); // destructive method // this method return the value it popped of array
// some methods dont alter the orginal value and some do / ninjas.push alters the orignal value and for that reason its called destructive method
console.log(ninjas); // ['Shaun', 'Ryu', 'Chun-Li', 'ken'] with push method
console.log(result); // result ken with pop method





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
//                         arrow function
// const calcArea = radius => 3.14 * radius**2; // this only works when there is only sinlg return line, even if {} and return is removed it still returns the value
// { // when having only 1 parameter () can be taken away, likewise if there is no parameter () are needed
//     return 3.14 * radius**2 
// }; //arrow function version of regular function / just a newer and shorter way to write functions

// const area = calcArea(5);
// console.log(`area is:`, area);


//                     practise arrow functions
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

// const name = 'Shaun';
// // function
// const greet = () => 'hello';
// let resultOne = greet();
// console.log(resultOne);
// // method (methods are functions that are associated with an object or data type like string)
// let resultTwo = name.toUpperCase()
// console.log(resultTwo)

//            callbacks & foreach

// const myFunc = (callbackFunc) => {
//     //do something
//     let value =50;
//     callbackFunc(value);
// };

// // myFunc(function(value){
// myFunc(value => {
//     //do something
//     console.log(value);
// });
// let people = ['Mario', 'Luigi', 'Ryu', 'Shaun', 'Chun-Li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - Hello ${person}`);
// };

// people.forEach(logPerson);
// // people.forEach((person, index) => {
// //     console.log(index, person);
// // });

//         get a reference to the 'ul'
// const ul = document.querySelector('.people');

// const people = ['Mario', 'Luigi', 'Ryu', 'Shaun', 'Chun-Li']; //array of different people

// let html = ``;
// people.forEach(person => {
//     // create html template for each person
//     html += `<li style="color: purple">${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;
