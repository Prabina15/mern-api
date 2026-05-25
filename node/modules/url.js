
const codeitUrl = "https://codeit.com.np/web-development/mern-stack?duration=3months";

const urlObject = new URL(codeitUrl);

console.log(urlObject);
console.log(urlObject.host);

const params = new URLSearchParams(urlObject.search);

params.set("time", "6pm");

const codeitUrl = "https://codeit.com.np/web-development/mern-stack?duration=3months";

const urlObject = new URL(codeitUrl);

console.log(urlObject);
console.log(urlObject.host);

const params = new URLSearchParams(urlObject.search);

params.set("time", "6pm");

console.log(params);