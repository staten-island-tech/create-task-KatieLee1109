// import {books} from "./file"
// const submitinput = document.querySelectorAll('.input')
// submitinput.addEventListener("input", (e) => {
// async function getresponse(books)
//     let value = e.target.value
//     if (value.status < 200 || value.status > 299){
//         throw console.error(response);
//     }else{
//         const data = await response.json();
//         console.log(data);
//     }
// })
   

import { books } from "./file";
import "../style.css";
const DomSelectors = {
    form: document.querySelectorAll(".form"),
    button1: document.querySelectorAll(".submit"),
    button2: document.querySelectorAll(".clear"),
    input: document.querySelectorAll(".input"),
}
DomSelectors.form.addEventListener("input", (e) => {
    e.preventDefault();
    let inputVal = input.value;
    display(inputVal)
});
async function file(){
    const response = await fetch (books);
    const books = await response.json();
    return books;
}
file().then(books => {
    books;
});

async function error(){
    const response = await fetch (books);
    if (response){
        const message = `The book you have searched up does not exist in the system.`;
        throw new error(message);
    }
    const books = await response.json();
    return books;
}
error().catch(error => {
    error.message;
});






