import { books } from "./file";
let input = document.querySelectorAll(".search")
let display = document.querySelectorAll(".display")
let form = document.querySelectorAll(".searchform")

form.addEventListener("click", (e) => {
    e.preventDefault();
    let inputval = input.value;
    display(inputval);
});
async function callfile(value) {
    value.forEach(books) => {
        display.innerHTML = "";
        (
            "beforeend",
            `<h2> ${books.title}</h2>
            <p id="number">Published: ${books.year}</p>
        <img class = "img" src = ${books.img} alt=""/>
        <p id="text">Description: ${books.description}</p>
        <button id="order">Buy the Book</button>
        `
        )
    };
}











































// async function response(value) {

// }



// async function books(things) {
//     try {
//         const response = await (things);
//         if (response.status < 200 || response.status > 299) {
//             throw new error(response);
//         } else {
//             const data = await response.json();
//             console.log(data);
//             DOMSelectors.form.insertAdjacentElement(
//                 "beforeend",
//                 ``
//             )
//         }
//     }



//  const error()
//     console.log(error);
//     DOMSelectors.input.insertAdjacentElement(
//         "beforeend",
//         `<div class="popup">
//         <p> The book you have searched for is not in the system.<p>
//         <div>`
//     );
// };
