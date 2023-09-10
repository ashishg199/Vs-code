 console.log("Hello Everyone");

//  const double=(num) =>{
//     return num * 2;

//  }
//  console.log(double(70));




//  console.log(window)
//    console.log(document)
    // console.log(global)

//command line argument
    // console.log(process.argv[2])

    const [, , num]= process.argv;

    const double=(num) =>{
        return num * 2;
    
     }
      console.log(double(num));





// for inserting 2 values....................SUM
const[, , a, b] = process.argv;

const sum=(a,b) => {
    return a + b;
};

console.log(sum(+a,+b));




