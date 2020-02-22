import { container, addButton } from "./domelements.js"
import { testTask } from "./todoObject.js"

// this is a test add button

function setNewTask () {
    const newTask = document.createElement('div');
    newTask.innerHTML = `The title of this task is: ${testTask.title}`

    container.appendChild(newTask)
}

const setAddButton = () => {
    addButton.addEventListener("click", function(){
        container.appendChild(testTask.testMethod())
    })
}

export {setAddButton}