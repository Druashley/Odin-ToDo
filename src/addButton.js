import { container, addButton } from "./domelements.js"
import { testTask } from "./todoObject.js"

// this is a test add button

function setNewTask (plusTask) {
    const newTask = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskDescription = document.createElement('div');
    const taskDueDate = document.createElement('div');
    const taskPriority = document.createElement('div');
    const taskNotes = document.createElement('div')
    const checkmark = document.createElement('img');

    checkmark.src = "./pictures/checkmark.png";
    taskTitle.textContent = plusTask.title;
    taskDescription.textContent = plusTask.description;
    taskDueDate.textContent = plusTask.dueDate;
    taskPriority.textContent = plusTask.priority;
    taskNotes.textContent = plusTask.notes;

    newTask.classList.add("task");
    checkmark.classList.add("icon");

    checkmark.addEventListener("click", markTaskDone)
    
    
    newTask.appendChild(checkmark);
    newTask.appendChild(taskTitle);
    newTask.appendChild(taskDescription);
    newTask.appendChild(taskDueDate);
    newTask.appendChild(taskPriority);
    newTask.appendChild(taskNotes);

    container.appendChild(newTask) 
}

function markTaskDone (){
    if (!this.parentElement.style.textDecoration){
        this.parentElement.style.textDecoration="line-through"
    } else {
        this.parentNode.remove()
    }  
}


export { setNewTask}