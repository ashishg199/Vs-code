console.log("Operator in JS")

// 77;
// "Ashish gupta"
// false

//  => Arithmetic Operator
let a = 9;
let b = 2;

console.log("a + b =",a+b)                   //a + b = 11
console.log("a - b ",a-b)                   //a - b  7
console.log("a * b =",a*b)                 //a * b = 18
console.log("a / b =",a/b)                //a / b = 4.5
console.log("a % b =",a%b)                //a % b = 1       (modulus)
console.log("a ** b =",a**b)                //a ** b = 81  (Exponentiation like multiple)

console.log("a++ =",a++)                    //a++ = 9  (Increment Operator)
console.log("a =",a)                       //a = 10
console.log("a-- =",a--)                    //a-- = 10  (decrement Operator)
console.log("a =",a)                        //a = 9
console.log("++a =",++a)                    // ++a = 10
console.log("--a =",--a)                    //--a = 9


// Assignment Operator
 let x = 5;
 x += 5  //  x = x + 5;
console.log(x)      // x = 10
x -= 4;
console.log(x)      // x = 6
x *= 2;
console.log(x)      // x = 12
x /= 3;
console.log(x)       // x = 4
x **= 2;
console.log(x)      //  x = 16  (x**2)


// Comparision Operators

let comp1 = 6;
let comp2 = "6";

console.log("comp1 == comp2 is",comp1 == comp2)
console.log("comp1 != comp2 is",comp1 != comp2)

console.log("comp1 === comp2 is",comp1 === comp2)
console.log("comp1 !== comp2 is",comp1 !== comp2)

// Logical Operators

let y = 5;
let z = 6;

console.log(y<z && y == 5)     // true  (AND operator => both need to be true)
console.log(y>z && y == 5)      //false (one is false and other is true => So For AND operator , it is false)
console.log(y>z || y == 5)     // true ( OR operator, any condition is true then, overall is true)
console.log(y>z || y == 6)     // false ( OR operator,both condition is false then, overall is false)
console.log(!false)           // NOT operator (false to true , and true to false)

// Bitwise operator => (Apart from these , we also have bitwise operator which perform Bit By Bit opertions on Numbers)


