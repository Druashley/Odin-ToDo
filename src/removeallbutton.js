import { container, createButton, completeButton, deleteChecked } from "./domelements.js"


// this js page is for the function of the button at the bottom of the to do page
function removeChecked() {
    //console.log(container.childElementCount)

    for (let i = 0; i <= container.childElementCount; i++) {
        if (container.children[i].firstElementChild.textContent == "●"){
            container.children[i].remove()
        }
    };
}

const removeButton = () => {
    deleteChecked.addEventListener("click", removeChecked)
}

export { removeButton }