import "style"
let input = document.querySelectorAll('.search')
let form = document.querySelectorAll('.submit')
let p = document.querySelectorAll('.display')
form.addEventListener("click", (e) => {
    e.preventDefault();
    let inputval = input.value;
    display(inputval);
});
async function callAPI(value) {
    let title = await fetch("https://openlibrary.org/authors/OL1394244A/works.json?limit=100");
    let returned = await data.json();
    return returned;
};
async function display(value) {
    let title = await callAPI(value);
    console.log(title);
    data.data.forEach(element => {
        p.insertAdjacentHTML(
            'afterend',
            `<p class ="yay">${element.title}
            <button class="choose">Save</button>
        </p>`)
    });
};


