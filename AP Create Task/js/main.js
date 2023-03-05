import { DOMSelectors } from "./dom";
import { books } from "./file";
import "../style.css";
console.log(create);

function create() {
  books.forEach((books) => {
    DOMSelectors.display.innerHTML = " ";
    DOMSelectors.maindiv.insertAdjacentHTML
      ("beforeend",
        `
    <h2> ${books.title}<h2>
    <img class="img" src= ${books.img}
    alt=""/>
    <p id="outputText"> Year Published: ${books.year}<p>
    <p id="outputText"> Description: ${books.description}<p>
    <button id="order" class="order">Purchase<button>
    <div>
    <div id="mainCard">
    `);
  });
};
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")
  ) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  };
});

const wimpykid = document.getElementById("wk");
wk.addEventListener("click", function () {
  DOMSelectors.display.innerHTML = " ";
  books.filter((wimpykid) => wimpykid.type === "wimpykid")
    .forEach(wimpykid => {
      DOMSelectors.main.insertAdjacentHTML
        ("beforeend",
          `<h2> ${wimpykid.title}<h2>
      <img class="img" src= ${wimpykid.img}
      alt=""/>
      <p id="outputText"> Year Published: ${wimpykid.year}<p>
      <p id="outputText"> Description: ${wimpykid.description}<p>
      <button id="order" class="order"> Purchase ${wimpykid.buy} <button>
      <div>
      <div id="mainCard">`
        );
    });
});

const Stilton = document.getElementById("gs");
Stilton.addEventListener("click", function () {
  DOMSelectors.display.innerHTML = " ";
  books.filter((Stilton) => Stilton.type === "Stilton")
    .forEach(Stilton => {
      DOMSelectors.main.insertAdjacentHTML
        (
          "beforeend",
          `<h2>${Stilton.title}</h2>
      <img class="img" src= ${Stilton.img}
      alt=""/>
      <p id="outputText"> Year Published: ${Stilton.year}</p>
      <p id="outputText">Description: ${Stilton.description}</p>
      <button id="order" class="order">Purchase ${Stilton.buy}</button>
      <div>
      </div id="mainCard">`
        );
    });
});






