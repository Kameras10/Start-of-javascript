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

// let ninjas = ['Shaun', 'Ryu', 'Chun-Li'];// Array with 3 elements/values inside it // [] - array syntax

// // ninjas[1] = 'Ken';
// // console.log(ninjas[1]); // get Shaun if [2] used inside would get Chun-Li and if there is no [] get all 3

// // let ages = [20,25,30,35];
// // console.log(ages[2]);
// // let random = ['Shaun', 'crystal', 30, 20]; // not limited to storing one thing
// // console.log(random[1]);

// // Arrays like strings like number have properties and methods

// // console.log(ninjas.length); // outputs 3 because it counts how many elements inside that array (['Shaun', 'Ryu', ' Chun-Li'])

// // array methods

// // let result = ninjas.join('-'); // takes array ninjas in this case and it joins all the elements inside with a (-) in this case
// // let result = ninjas.indexOf('Chun-Li'); // 2
// // let result = ninjas.concat(['ken', 'crystal']); // concat  joining things together like 2 arrays // ['Shaun', 'Ryu', 'Chun-Li', 'ken', 'crystal']
// let result = ninjas.push('ken'); // returns the lenght of the new array // So 4 with ken added
// result = ninjas.pop(); // destructive method // this method return the value it popped of array
// // some methods dont alter the orginal value and some do / ninjas.push alters the orignal value and for that reason its called destructive method
// console.log(ninjas); // ['Shaun', 'Ryu', 'Chun-Li', 'ken'] with push method
// console.log(result); // result ken with pop method

//         Null & Undefined
// let age;

// console.log(age, age + 3, `the age is ${age}`); // undefined NaN 'the age is undefined'
// let age = null;
// console.log(age, age + 3, `the age is ${age}`);

//        booleans & comparisons
// booleans - to evaluate conditions in our code
// console.log(true, false, "true", "false");

// // methods can return booleans
// let email = 'marius@gmail.com';
// let names = ['luigi', 'toad', 'bean'];

// // let result = email.includes('@');
// // let result = names.includes('tako');
// // console.log(result);

// //    comparison operators - to compare two things together and they are going to return boolean true or false
// let age = 25;

// // // console.log(age == 30); //(false)
// // // console.log(age != 30); // != - negates this / ask if age is not equal to 30 (true)
// // // console.log(age > 20); // not greater then 20 (true)
// // // console.log(age < 20); // less then 20 (false)
// // // console.log(age <= 25); // less then or equal to 25 (true)
// // // console.log(age >= 20); // greater then or equalto 25 (true)

// // // with string
// // let name = 'shaun';

// // // == abstract equallity or loose equallity, values type is not considered when comparison is performed
// // console.log(name == 'shaun'); // name = shaun (true)
// // console.log(name == 'Shaun'); // name = shaun (false) capital S (Shaun)
// // console.log(name > 'crystal'); // (true) shaun is greater then crystal because s comes later in the alphabet / so later letters in the alphabet are greater then early ones
// // console.log(name > 'Shaun'); // (true) lower case letter greater then a upper case letter
// // console.log(name > 'Crystal'); // (true) 

// // loose comparison (different types can still be equal)
// // console.log(age == 25); // == asking are these 2 things the same age = 25? (true) / loose comparison - different types can still be equal
// // console.log(age == '25'); // (true) age = 25 is still equal to a string 25 / javascript converts that string into a number before it evaluates it
// // // when 2 things are compared to each other using == different types can still be equal because of this type conversion that js does in a background
// // console.log(age != 25);//(false)
// // console.log(age != '25');//(false)

// // strict comparison (different types cannot be equal) - instead of using == signs use 3 and instead of (!=) using 1= here use 2

// console.log(age === 25); //(true) === asking if age is the same type and value as 25
// console.log(age === '25');//(false) because now its a string and there is no type conversion so a number and a string is compared directly and they are not equal
// console.log(age !== 25); // (false) its asking if 25 is not equal to 25 and that is false because age is equal to 25
// console.log(age !== '25'); //(true) because a string is used instead of a number

// type conversion
// let score = '100';

// // score = Number(score);// type conversion converting string into a number
// // console.log(score + 1); // if string is not converted into a number it would just add 1 to the end and give 1001 but with string converted you get 101
// // console.log(typeof score); // checking type of

// // let result = Number('hello'); // when trying to convert words into numbers you get NaN not a number
// // console.log(result); // NaN
// // let result =String(50);
// // let result = Boolean(100);
// let result = Boolean('0');
// console.log(result, typeof result); // 50 string so its not a number / true "boolean" 0 - falsy value / positive nombers are considered truthy value in type conversion, minus numbers are also truthy
// // but 0 is false / strings of any lenghts are all truthy but an empty string is falsy


//           Control Flow 
// Use loops for cycling through data
// Use conditional statments for checking conditions

//for loops
// don't add ; at the end for loops
// inside () 3different things, first an initialization variable and this variable is like a counter it keeps count how many times we cycle through the loop and how many times code is runned
// second thing is condition and its going to evaluate to either true or false, if condition is true its going to execute the code that is inside the code block and if its false its not going to do that
// third thing is a final expression and its going to execute everytime at the end of a code block
// for (let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['shaun','mario','luigi']; // each iteration is one cycle through, each time code blocked is performed that is one iteration
// // names.length used when unknown how many elements are inside there and how many times to cycle through it
// for(let i = 0; i < names.length; i++){
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// while loops do exactly the same thing as for loops, both loop through some code a certain amount of times
// the only difference is syntax of how its written
// infinity loop when cycle has no end and you are caught in it
// const names = ['shaun', 'mario', 'luigi'];
// // let i = 0;

// // while(i < 5){
// //     console.log('in loop: ', i);
// //     i++;
// // }
// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// do while loops - just an extension of while loop
// executes a block of code inside of loop first regardless whatever condition is true or false 
// let i = 5;
// do{
//     console.log('val of i is: ', i);
//     i++;
// } while(i < 5);

// if statements
// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const items = ['table', 'fork', 'oak', 'robe'];

// if(items.length > 3){
//     console.log("that's a lot of items"); // use "" when there is ' inside (that's)
// }

// const password = 'pass';

// if(password.length >= 8){
//     console.log('password is long enough!');
// }


// else if statements

// it can only run either of those and never both of them at the same time

// const password = 'passwor';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is very strong');
// } else if(password.length >= 8 || password.includes('s') && password.length >= 5 ){ // because of ||(or) only one condition can be met
//     console.log('password is strong enough!');
// } else {
//     console.log('password is not strong enough');
// }
// // logical operators - OR - || and AND - &&

//    logical NOT (!) - reverses boolean value 

// let user = false;

// if(!user){
// console.log('you must be logged in to continue');
// }

// console.log(!true); // this makes this false
// console.log(!false);  // makes this true


//       break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue; // to braek out of the current loop and continue with the next iteration
//     }

//     console.log('your score: ', scores[i]);
//     if(scores[i] === 100){
//         console.log('congrats, you got the top score!');
//         break; // breaks out of the loop / so its going to ignore last 2elements [20, 10] and carry on with the code
//     }
// }


//    switch statements

// const grade = 50;
// switch(grade){
// case 50:
//     console.log('you got an A!');
//     break; // Without a break statement it runs every single line after it
// case 'B':
//     console.log('you got an B!');
//     break;
// case 'C':
//     console.log('you got an C!');
//     break;
// case 'D':
//     console.log('you got an D!');
//     break;
// case 'E':
//     console.log('you got an E!');
//     break;
// default: // runs only when its not covered by any of the cases above
//     console.log('not a valid grade');
// }

// this using if statements
// if(grade === 'A'){

// } else if(grade === 'B'){

// } else if(grade === 'C'){

// } else if(grade === 'D'){

// } else if(grade === 'E');



// //     variables & block scope
// const age = 30; // global scope and be accessed anywhere in the file
// // same with let/const but once const is defined it cant be changed / same rules of scope apply to const as they do to let variables
// // var - old variable ignores block scope
// if(true){
//     const age = 40; // (age = 40) - access global scope(root scope) variable and changes it to 40 (let age = 40) - only changes inside code block because its local scope and it can only accessed inside this code block
//     const name = 'shaun';
//     // code block - sections of code that runs when something is true or conditions is met
//     console.log('inside code block:', age, name); //this is also true for nested code blocks (if)
// if(true){
//     const age = 50; // creates new variable with new local scope inside just this code block
//     // nested code block - code block inside another code block
//     console.log('inside nested code block:', age, name); // local scope used so get name and age variable from inside code block 
//     var test = 'hello';
// }
// }

// console.log('outside code block:', age, name, test); // don't get name here because it has variable has been set inside code block with local scope // var - its not given block scope, so let/const has advantage



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

//            // function declaration (no variable) - one of the main building blocks in the most programing languages / functions fall under object data type category
// Function - allows to define a block of code which we can call and use whenever needed
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


//            Object in JavaScript have properties & things they can do (methods)
// examples user object - properties(email, username, gender) / methods (login, logout)
// blog object - properties(title, author, content) / methods (publish, unpublish, delete)

// object literals

let user = {
name: 'crystal', //(name) - key (crystal) - value // this makes one property of this user object
age: 30, // , only when there is another key value after it
email: 'crystal@gmail.com',
location: 'Ukrain',
blogs: ['why i like pasta', '10 things to make with air'],
login(){
    console.log('the user logged in');
},
logout(){
    console.log('the user logged out');
},
logBlogs(){
// console.log(blogs); //does not work 
// this.blogs; // context object
// console.log(this.blogs);
console.log('this user has written the following blogs:')
this.blogs.forEach(blog => {
    console.log(blog);
})
// console.log(this); // this now is the window object
}

}; // this way is only for readability and can be placed in one line (let user = {name: 'crystal', age: 30, email: 'crystal@gmail.com', location: 'Ukrain', blogs: ['why i like pasta', '10 things to make with air']})

user.logBlogs();
console.log(this); // global context (window object)

// console.log(user);
// console.log(user.name); // to get one value 

// user.age = 35; // overwrite one value
// console.log(user.age);//35 not 30

// const key = 'location';
// user.key // cant be used
// console.log(user[key]); // same as saying user['location']

// console.log(user['email']); // this way can be useful when passing some kind of variable
// user['name'] = 'Kate'; // change the value
// console.log(user['name']);

// console.log(typeof user); // object

// user.login();
// user.logout();

// const name = 'mario';
// name.toUpperCase();
