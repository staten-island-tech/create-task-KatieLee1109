import { books } from "./file"
import "../style.css";
const DomSelectors = {
    form: document.querySelectorAll(".form"),
    button1: document.querySelectorAll(".submit"),
    button2: document.querySelectorAll(".clear"),
    input: document.querySelectorAll(".input"),
    q: document.querySelectorAll(".display"),
}
DomSelectors.form.addEventListener("click", (e) => {
    e.preventDefault();
    let inputVal = input.value;
    display(inputVal)
});
async function file(books){
    const book = await fetch (books)
    const returned = await book.json();
    return returned;
};
async function display(books){
    const book = await file(books);
    console.log(book)
    books.books.forEach(books => {
        q.insertAdjacentHTML(
            "afterend",
             `<img class="img" src= ${books.img} alt=""/>
             <p class="output">Year Published: ${books.year}<p>
             <p class="output">Description: ${books.description}<p>
             `)
    });
    q.innerHTML = book.book[0]
};







