fs.readFile("Routine.html", "utf-8", (err,data) =>{
  if(err){
    console.log("Error",err)
  }  
  console.log("The Content Of The File is => ",data);
})
