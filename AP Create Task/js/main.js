import { DOMSelectors } from "./dom";
import { books } from "./file";
import "../style.css";
console.log(create);

async function data(books) {
  try {
    const response = await fetch(books);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("can not be found");
  }
}

function create() {
  books.forEach((books) => {
    DOMSelectors.display.innerHTML = " ";
    DOMSelectors.display.insertAdjacentHTML
      ("beforeend",
        `
    <h2> ${books.title}<h2>
    <img class="img" src= ${books.img}
    alt=""/>
    <p id="outputText"> Year Published: ${books.year}<p>
    <p id="outputText" class="year"> Description: ${books.description}<p>
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
wimpykid.addEventListener("click", function () {
  DOMSelectors.display.innerHTML = " ";
  books.filter((wimpykid) => wimpykid.type === "wimpykid")
    .forEach(wimpykid => {
      DOMSelectors.display.insertAdjacentHTML
        ("beforeend",
          `<h2> ${wimpykid.title}<h2>
      <img class="img" src= ${wimpykid.img}
      alt=""/>
      <p id="outputText" class="year"> Year Published: ${wimpykid.year}<p>
      <h3 id="outputText"> Description: ${wimpykid.description}<h3>
      <h3><a href="${wimpykid.buy}">Purchase</a></h3>
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
      DOMSelectors.display.insertAdjacentHTML
        (
          "beforeend",
          `<h2>${Stilton.title}</h2>
      <img class="img" src= ${Stilton.img}
      alt=""/>
      <p id="outputText"> Year Published: ${Stilton.year}</p>
      <h3 id="outputText" class="text">Description: ${Stilton.description}<h3>
      <h3><a href= "${Stilton.buy}">Purchase<a><h3>
      <div>
      </div id="mainCard">`
        );
    });
});







