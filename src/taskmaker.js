import { todoTask } from "./todoObject.js"
import { format, compareAsc, set, add } from 'date-fns'
import { createButton, forumContainer } from "./domelements.js"
import { setNewTask } from "./addButton.js"





createButton.addEventListener("click", function(){


    if (!forumContainer.childElementCount > 0){
        

    const forumBody = document.createElement("div");
    const titleForm = document.createElement("input");
    const descriptionForm = document.createElement("input");
    const duedateForm = document.createElement("input");
    const priorityForm = document.createElement("select");
    const noteForm = document.createElement("input");
    const plusButton = document.createElement("button");
    const minusButton = document.createElement("button");

    plusButton.textContent = "Add Task";
    minusButton.textContent = "Quit";

    titleForm.setAttribute("placeholder", "Title?");
    descriptionForm.setAttribute("placeholder", "Description?");
    duedateForm.setAttribute("placeholder", "Days until due?");
    noteForm.setAttribute("placeholder", "Notes?")

    priorityForm.setAttribute("id", "prioritySelect");

    const highPriorirty = document.createElement("option");
    const mediumPriorirty = document.createElement("option");
    const lowPriorirty = document.createElement("option");
    
    highPriorirty.setAttribute("value", "High");
    mediumPriorirty.setAttribute("value", "Medium");
    lowPriorirty.setAttribute("value", "Low");

    const highPriorirtyText = document.createTextNode("High");
    const mediumPriorirtyText = document.createTextNode("Medium");
    const lowPriorirtyText = document.createTextNode("Low");

    highPriorirty.appendChild(highPriorirtyText);
    mediumPriorirty.appendChild(mediumPriorirtyText);
    lowPriorirty.appendChild(lowPriorirtyText);

    priorityForm.appendChild(highPriorirty);
    priorityForm.appendChild(mediumPriorirty);
    priorityForm.appendChild(lowPriorirty);
    
    forumBody.appendChild(titleForm);
    forumBody.appendChild(descriptionForm);
    forumBody.appendChild(duedateForm);
    forumBody.appendChild(priorityForm);
    forumBody.appendChild(noteForm);
    forumBody.appendChild(plusButton);
    forumBody.appendChild(minusButton)

    
    plusButton.addEventListener("click", plusButtonFunction);

    minusButton.addEventListener("click", function (){
        forumContainer.innerHTML = '';
    });

function plusButtonFunction () {
    let addDate = add(new Date(), {
        days: duedateForm.value,
      });
    let setDate = format(addDate, 'MM/dd/yyyy')  
    const plusTask = todoTask({ title: titleForm.value, description: descriptionForm.value, dueDate: setDate, priority: priorityForm.value, notes: noteForm.value })
    setNewTask(plusTask)
    forumContainer.innerHTML = '';
}

    forumContainer.appendChild(forumBody)

}
});




const buttonClick = () => {createButton}


export {buttonClick}