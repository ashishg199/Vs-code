// console.log("For Loop")     // For Loop

// Program to add first two natural number
let sum = 0;
let n = prompt("Enter the value of n")
n =  Number.parseInt(n)
for(let i = 0; i<n; i++){  // let -  is the block type element (it Work within the block)
   sum += (i+1)
}

console.log("Sum of first " + n + " Natural Number is :\n " + sum)
//console.log(i)  // if we use (let i) then i = undefined and if we use (var i) then i = n.
//Example:



/*
let obj = {
    Ashu: "98",
    Harry: "90",
    Prakhar: "96",
    Sejal : "80",
    Suryanshi : "70",
    Sanju : "88",
    Shreya : "90"

}

// For-In Loop (It work with the arrys )
for(let a in obj){
    console.log("Marks of " + a + " are "+ obj[a])
}

// For-Of Loop 

for(let b of "Ashu"){
    console.log(b)
}
*/
