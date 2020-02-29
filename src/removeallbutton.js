import { container, createButton, completeButton, deleteChecked } from "./domelements.js"

function removeChecked () {
    console.log('test');
}

const removeButton = () => {
    deleteChecked.addEventListener("click", removeChecked)
}

export { removeButton }