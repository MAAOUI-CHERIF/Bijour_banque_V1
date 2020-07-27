import { user } from "./user.js";

console.dir(user);

console.log("hello John, i know your password :-)", user.password);

document.querySelector("#firstname").textContent = user.firstname;

// const mess = "Hello from app.js";
// console.log(mess);

// const totalCredit = document.querySelector("#totalCredit").innerText.split(" ");
// console.log(Number(totalCredit[0]));
//....
