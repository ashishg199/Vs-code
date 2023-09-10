const fs = require("fs");


const quote = "Keep Learning Everyday";

fs.writeFile("Routine.html", quote,() =>{
    console.log("Complete writing routine.html file");
})

fs.readFile("Routine.html", "utf-8", (err,data) =>{
  if(err){
    console.log("Error",err)
  }  
  console.log("The Content Of The File is => ",data);
})

const quote2 = "\nImagine the Impossible";

fs.appendFile("./nice.txt",quote2 , () => {
  console.log("Completed Writing");
})

fs.unlink("./toRemove.txt", (err) =>{
  if (err) throw err;
  console.log('File Deleted successfully');
});  //File deleted (toRemove.txt)

