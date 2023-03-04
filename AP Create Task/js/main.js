import {books} from "./file";

const DOMSelectors = {
    display: document.querySelectorAll("display"),
    btn1: document.querySelectorAll("btn"),
    showbook: document.querySelectorAll("book"),
};

const book = fetch (books)

async function getdata(book){
    try{
        const response = await fetch (book);
        if (response.status < 200 || response.status > 299){
            throw new Error(response);
        } else{
            const data = await response.json();
            console.log(data);

function createcard(){
    books.forEach((books) => {
        DOMSelectors.display.insertAdjacentHTML 
        ("afterbegin",
        `<h1>${books.title}<h1>
        <img class="img" src= ${books.img} alt = ""/>
        <h2>${books.description}<h2>
        <button class="btn2">Purchase ${book.buy}<button>
        `);
    });
}
DOMSelectors.book.addEventListener("click", function(){
    createcard();
});
        }
}catch(error){
    console.log(error);
    console.log("The book can't be found");
}
}
getdata(books);

