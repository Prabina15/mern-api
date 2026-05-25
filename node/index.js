// const fs = require("fs");
// const { sum } = require("./utils");

import fs from "fs";
import { sum } from "../utils.js";


console.log("Start");
const name = "Ram";

console.log(name);
fs.readFile("data.txt", "utf-8", (error, data )=> {
    if(error){
        console.log(error);
    }

    console.log(data);
})

const result = sum(10, 20);
console.log(result);

console.log("End");

// const fs = require("fs");
// const { sum } = require("./utils");

import fs from "fs";
import { sum } from "../utils.js";


console.log("Start");
const name = "Ram";

console.log(name);
fs.readFile("data.txt", "utf-8", (error, data )=> {
    if(error){
        console.log(error);
    }

    console.log(data);
})

const result = sum(10, 20);
console.log(result);

console.log("End");

