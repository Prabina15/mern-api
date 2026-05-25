import path from "path";
import url from "url";

const filepath = 'folder1/folder2/folder3/file.txt';

console.log(path.basename(filepath)); // file.txt
console.log(path.extname(filepath)); // .txt
console.log(path.dirname(filepath)); //folder/s name


const __fileName = url.fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);


console.log(__fileName);
console.log(__dirName);

import path from "path";
import url from "url";

const filepath = 'folder1/folder2/folder3/file.txt';

console.log(path.basename(filepath)); // file.txt
console.log(path.extname(filepath)); // .txt
console.log(path.dirname(filepath)); //folder/s name


const __fileName = url.fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);


console.log(__fileName);
console.log(__dirName);
// >>>>>>> 6702212 (fix project structure and add files)
