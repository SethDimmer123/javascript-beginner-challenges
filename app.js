





// Question 1. Return the Sum of Two Numbers

// Create a function that takes two arguements as functions and return their sum.

// addition(3,2) -> 5

// addition(-3,-6) -> -9

// addition(7,3) -> 10


/* Answer is down below */

// function addition(num1,num2){
// return num1 + num2
// }

// console.log(addition(3,2));


// we need to return something if i want to console log it

// whenever i am calling a function i want to use the value i need to make sure to be returning something.

// the value in this scenario is num1 and num2

// whatever is inside of the parameters is the values that you use if i want to return something














// Question 2. Convert Hours into Seconds(Starts at 3:24)

// Create a function that converts hours into seconds

// What do we need to do to actually turn this into seconds?

// hoursIntoSeconds(2) --> 7200

// hoursIntoSeconds(10) --> 36000

// hoursIntoSeconds(24) --> 86400







/* Answer is below */

// function hoursIntoSeconds(hour){
    // let minutes = hour * 60;
    // let seconds = minutes * 60;
    // return seconds;
// }

// console.log(hoursIntoSeconds(2))














// Question 3. Calculate the perimeter of a rectangle

// Create a function that takes length and width of a rectangle and return it's perimeter

// calcPerimeter(6,7) -> 26

// calcPerimeter(20,10) -> 60

// calcPerimeter(2,9) -> 22

// The perimeter is 2 times the length plus 2 times width.








// REMEMBER PEMDAS

/* Answer is down below */

// function calcPerimeter(length,width){
// return 2 * length + 2 * width;
// }

// console.log(calcPerimeter(6,7))












// Question 4. Calculate the Area of a Triangle (6:34)

// Write a function that takes the base and height of a triangle and return its area.

// calcTriangleArea(3,2) -> 3
// calcTriangleArea(10,10) -> 50
// calcTriangleArea(20,20) -> 200

// formula to calculate area is  0.5 * base * height





/* Answer is down below */

// function calcTriangleArea(base,height){
    // return  0.5 * base * height;
// }

// console.log(calcTriangleArea(20,20))





















// Question 5. Extend a String(8:05)

// Write a function accepts a string and adds 'Frontend' onto the end of it.

// appendFrontend('Apple') -> "AppleFrontend"

// appendFrontend('Banana') -> "BananaFrontend"

// appendFrontend('Orange') -> "OrangeFrontend"

// Accept a string
// Adding strings is similar to adding numbers
// Don't forget to return your result





/* ANSWER DOWN BELOW */



// function appenedFrontend(){
    // return 'AppleFrontend'
// }

// console.log(appenedFrontend('Apple'))














// Question 6. Greater than 100?

// Given two numbers, return true if the sum of both numbers is greater than 100.
// Otherwise,return false.

// sumGreaterThan100(20,10) -> false

// sumGreaterThan100(50,60) -> true

// sumGreaterThan100(100,-50) -> false


/* ANSWER DOWN BELOW */

// function sumGreaterThan100(num1,num2){
    // return num1 + num2 > 100
// }

// console.log(sumGreaterThan100(20,10))

// It is returning false because the sum is NOT Greater than 100










// Question 7. Less than or Equal to Zero?

// Write a function that accepts a number and returns true 
// if it is less than or equal to zero, otherwise returns false.

// lessThanOrEqualToZero(3)--> false

// lessThanOrEqualToZero(0)--> true

// lessThanOrEqualToZero(-2)--> true

// tip: use the less than or equal to operator



/*ANSWER DOWN BELOW*/

// function lessThanOrEqualToZero(number){
    // return number <= 0
// }

// console.log(lessThanOrEqualToZero(3))













// Question 8. Opposite boolean

// Given a boolean (true or false), return the opposite boolean.

// oppositeBoolean(true) --> false

// oppositeBoolean(false) -->true


// ANSWER DOWN BELOW

// function oppositeBoolean(boolean) {
    // if (boolean === false) {
        // return true;
    // }
    // else{
        // return false
    // }
// }

// console.log(oppositeBoolean(true))

// if the boolean we are getting is equal to false then return true otherwise (else statement) return false









// The easiest way to do THE PROBLEM ABOVE 
// IS DOWN BELOW

// function oppositeBoolean(boolean) {
        // return !boolean;
// }

// console.log(oppositeBoolean(false))

/* An EXCLAMATION MARK INFRONT OF A BOOLEAN VALUE IS GOING TO GIVE YOU THE OPPOSITE OF WHAT THE BOOLEAN VALUE IS*/








// Question 9. Is not a number 0

// Given ANY element, return true if it is NOT the number 0.

// isNotZero(5) --> true
// isNotZero(0) --> false
// isNotZero(null) --> true

// function isNotZero(number) {
    // if
    // (number !== 0) {
        // return true
    // }

    // else{
        // return false
    // }
// }

// console.log(isNotZero(5));








/*EASY WAY TO DO WHAT IS ABOVE DOWN BELOW */

// function isNotZero(number) {
    // return number !== 0
// }

// console.log(isNotZero(0))

// If we return a boolean(true or false) i can return directly

/*Very Important tip DOWN BELOW */

// if it returns a boolean in the console by default then i can return it straight away and not have to do if and else if statements







// Question 10. Calculate the remainder

// Given two numbers, return their remainder when divided by each other.

// calcRemainder(4,2)--> 0

// calcRemainder(7,8)--> 7

// calcRemainder(9,8)--> 1

// function calcRemainder(num1,num2) {
// return num1 % num2;
// }

// console.log(calcRemainder(4,2))


// In order to calculate the remainder 
// use percentage symbol because it calculates the remainder for me










// Question 11. is the number odd?

// Given two numbers,return true if the number is odd


// isOdd(1) --> true

// isOdd(2) --> false

// isOdd(3) --> true

// (use the remainder operator) which is the % symbol

/*Very Important tip DOWN BELOW */

/* An EXCLAMATION MARK INFRONT OF A BOOLEAN VALUE IS GOING TO GIVE YOU THE OPPOSITE OF WHAT THE BOOLEAN VALUE IS*/


// function isOdd(number){
    // if (number % 2===0) {
        // return false
    // }
    // else{
        // return true
    // }
// }

// console.log(isOdd(15))



// The easiest way to do THE PROBLEM ABOVE 
// IS DOWN BELOW


 
// function isOdd(number){
    // return number % 2 !==0
// }

// console.log(isOdd(15))






// Question 12. if a number is even,return 1 otherwise return -1

// Create a function that takes a number arguement and 
// returns 1 if the number is even. if the number is odd return -1.

// booleanInteger(1) --> -1

// booleanInteger(2) --> 1

// booleanInteger(5) --> -1


function booleanInteger(number){
    if(number % 2 === 0){
        return 1;
    }
    return -1;
}

console.log(booleanInteger(15))


// The easiest way to do THE PROBLEM ABOVE 
// IS DOWN BELOW (using ternary operator)

function booleanInteger(number){
return number % 2 === 0 ? 1 : -1
}

console.log(booleanInteger(15))


// truthy and falsy explanation (28:10)






// Question 13. Check if a user is logged in AND subscribed

// Create a function that takes in two strings. If the strings equal to
// 'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED' return true,
// otherwise return false.


// isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') --> true

// isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') --> false

// isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') --> false
































