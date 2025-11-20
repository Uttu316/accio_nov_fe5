import MyApp, { getUserData, userData as user_data } from "./a.js";
// import * as A from "./a.js"; // to import all variable together in object

// console.log("B file print", x);

// console.log(A);
const userData = getUserData();

console.log(userData, user_data);

MyApp();
