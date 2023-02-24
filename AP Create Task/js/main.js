import {books} from "./file";
import { DOMSelectors } from "./dom";

DOMSelectors.form.addEventListener("submit", function(click){
    click.preventDefault();
    books(DOMSelectors.input.title);
});

async function books(things){
    try{
        let
    } else{



        cons data = await URL.json();
        console.log(data);
        DOMSelectors.form.insertAdjacentElement(
            "beforeend",
            ``
        )

    }
}


{

}catch (error){
    console.log(error);
    DOMSelectors.input.insertAdjacentElement(
        "beforeend",
        `<div class="popup">
        <p> The book you have searched for cannot be found.<p>
        <div>`
    );
};



