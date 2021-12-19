greet("Josh ", "Survival ", "22 ", "Michigan ", "How was your journey?"); // example of hoisting
// Object - Arrays, Object Literals, Functions, Dates etc
// Function does particular thing 
// Defining the code inside the function once but can rut it as many times as you want
//  {} - code block for the function and when code is called this is what going to get executed
// Calling the function greet()
// hoisting only works with function declaration and not expression (hoists to the top)
// hoisting can let you run function even if its written after its been called
// Does not impose good coding practise when you are declaring things (best to first declare function and then use it)
// can end up with mashup of functions and calls all over the place

           // function declaration (no variable)
function greet(name, lastName, age, city, question){
    console.log("Hello " + name + lastName + age + city + question);
}
           // Function expression (with variable)
const speak = function(){
    console.log("Good day!");
};
speak();
greet("Josh ", "Survival ", "22 ", "Michigan ", "How was your journey?");
greet("Kentucky ", "Ubguva ", "42 ", "Kentuccky ", "How was your journey?");