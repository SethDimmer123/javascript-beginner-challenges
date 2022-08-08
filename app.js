// Question 1. Return the Sum of Two Numbers

// Create a function that takes two arguements as functions and return their sum.

// addition(3,2) -> 5

// addition(-3,-6) -> -9

// addition(7,3) -> 10


function addition(num1,num2) {
    return num1 + num2
}

console.log(addition(3,2));

// with a function you have to return something if i want to console log it



// Question 2. Convert Hours into Seconds(Starts at 3:24)

// Create a function that converts hours into seconds

// What do we need to do to actually turn this into seconds?

function hoursIntoSeconds(hour) { //i got this right
    let minutes = hour * 60; 
    let seconds = minutes * 60;
    return seconds // i got this right
}

console.log(hoursIntoSeconds(2)) //I got this right


// Question 3. Calculate the perimeter of a rectangle

// Create a function that takes length and width of a rectangle and return it's perimeter

// calcPerimeter(6,7) -> 26

// calcPerimeter(20,10) -> 60

// calcPerimeter(2,9) -> 22

// The perimeter is 2 times the length plus 2 times width.

function calcPerimeter(length, width) {
    return length * 2 + width * 2;
}

console.log(calcPerimeter(6,7));
















