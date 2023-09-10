    //Condition Expression..............(Consist of :- if , if-else, if- else_if- else)

let a = prompt("Hey! What's your age")      // promt ask

a = Number.parseInt(a)      // Converting the String to a Number

if(a>=18){
    alert("Valid age for Driving")

}
else if(a<10 && a>0){
    alert("You are a kid")
}
else if(a>10 && a<18){
    alert("Now you can think of driving")
}
else{
    alert("Invalid age for Driving")
}
// let b = alert("Hey!")                      // alert tell something
// console.log( typeof a)


// Ternary Operator

console.log("You can",( a<18? "not Drive" :"Drive"))

//Switch Conditions............................

const expr ="S"
switch(expr){
    case 'Prakhar':
    console.log("Pk is my childhood friend")
    break;
    case 'S':
    case 'Sejal':
    case 'Suryanshi':
        console.log("Sejal and Suryanshi both are bad Girls")
        break;


}



