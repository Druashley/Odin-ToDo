import { todoTask } from "./todoObject.js"
import { format, compareAsc, set } from 'date-fns'
import { createButton, forumContainer } from "./domelements.js"
import { setNewTask } from "./addButton.js"





createButton.addEventListener("click", function(){

    // create the elements and use the todo object called todoTask

    const forumBody = document.createElement("div");
    const titleForm = document.createElement("input");
    const descriptionForm = document.createElement("input");
    const duedateForm = document.createElement("input");
    const priorityForm = document.createElement("select");
    const noteForm = document.createElement("input");
    const plusButton = document.createElement("div");
    const minusButton = document.createElement("div");

    plusButton.textContent = "+";
    minusButton.textContent = "-";

    
    forumBody.appendChild(titleForm);
    forumBody.appendChild(descriptionForm);
    forumBody.appendChild(duedateForm);
    forumBody.appendChild(priorityForm);
    forumBody.appendChild(noteForm);
    forumBody.appendChild(plusButton);
    forumBody.appendChild(minusButton)

    
    plusButton.addEventListener("click", plusButtonFunction);


function plusButtonFunction () {

    let testDate = format(new Date(2022, 1, 11), 'MM/dd/yyyy')


    const plusTask = todoTask({ title: titleForm.value, description: descriptionForm.value, dueDate: testDate, priority: "high", notes: noteForm.value })
    setNewTask(plusTask)

}

    forumContainer.appendChild(forumBody)

});




const buttonClick = () => {createButton}


export {buttonClick}