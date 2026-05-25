
//Promise: Async programming, promise is a future value
//Pending -> fulfilled, rejected

import fs from "fs/promises";

fs.readFile("data/data.txt","utf-8").then((data) =>{
        console.log(data);
    })
    .catch( (error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("This is finally block");
    });

    fs.readFile("data/file1.txt","utf-8")
    .then((data1) => {
        console.log(data1);
        return fs.readFile("data/file2.txt","utf-8")
       })
        .then((data2) => {
            console.log(data2);
           return fs.readFile("data/file3.txt","utf-8")
        })
        .then((data3) => {
            console.log(data3);
        })
        .catch((error) => {
            console.log(error);
        });

//Promise: Async programming, promise is a future value
//Pending -> fulfilled, rejected

import fs from "fs/promises";

fs.readFile("data/data.txt","utf-8").then((data) =>{
        console.log(data);
    })
    .catch( (error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("This is finally block");
    });

    fs.readFile("data/file1.txt","utf-8")
    .then((data1) => {
        console.log(data1);
        return fs.readFile("data/file2.txt","utf-8")
       })
        .then((data2) => {
            console.log(data2);
           return fs.readFile("data/file3.txt","utf-8")
        })
        .then((data3) => {
            console.log(data3);
        })
        .catch((error) => {
            console.log(error);
        });

   