import { books } from "./file"
import { DOMSelectors } from "./dom"
DOMSelectors.form.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputVal = input.title;
    display(inputVal)
});
async function file(booked) {
    const book = await fetch(books)
    console.log(book)
    const returned = await booked.json();
    return returned;
};
async function display(booked) {
    const book = await file(booked);
    console.log(book)
    books.forEach(books => {
        q.insertAdjacentHTML(
            "afterend",
            `<img class="img" src= ${books.img} alt=""/>
             <p class="output">Year Published: ${books.year}<p>
             <p class="output">Description: ${books.description}<p>
             <p class="buy">Purchase the Book: ${books.buy}</p>
             `)
    });
    q.innerHTML = title.booked
};







