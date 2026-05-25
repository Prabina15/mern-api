
/**
 * fs: file system module for Node JS , uses for file operations like read, write, delete, rename etc.
 * synchronous: blocking opeartion
 * asysnchronous: non-blocking operation
 */

import fs from 'fs';

//1. Synchronous  Method

//Read file
// const result = fs.readFileSync("data/data.txt", "utf8");

// const image = fs.readFileSync("data/cat.avif","base64");
// console.log(image);
// console.log(result);

//Write file
// fs.writeFileSync("data/file.txt", "This is a file created using fs module in node js");
// fs.writeFileSync("data/data.json", JSON.stringify({hello: "world"}));

//Update file
// fs.appendFileSync("data/file.txt", ". This is newly appended.");

//Delete file

// fs.rmSync("data/data.json");

// fs.mkdirSync("myFolder");


// 2. Asynchronous Methods

//Read file
console.log("file before");
fs.readFile("data/data.txt","utf8",(error, data)=> {
  if (error) {
    console.error("Error reading file:", error);
  } else {
    console.log( data);
  }
});

console.log("file after");


// Write file

fs.writeFile("data/data.json", JSON.stringify({name: "Prabina"}), ()=>{
    console.log("Fle written successsfully");
})


// Update file
fs.appendFile("data/data.json", JSON.stringify({name: "Prabina", age: 25}), ()=>{
    console.log("Fle update successsfully");
})



// Delete file
fs.rm("data/data.json");
