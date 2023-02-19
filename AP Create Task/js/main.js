
import {books} from "./file";
import { DOMSelectors } from "./dom";
console.log(createcard);
function createcard(){
    books.forEach((books) =>{
        DOMSelectors.display.innerHTML = "";
        DOMSelectors.main.insertAdjacentHTML
        ("beforeend",
        `<h2> ${books.title}<h2>
        <img class = "img" src= ${books.img} alt=""/>
        `

        )

    })
}


