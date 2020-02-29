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
    const checkmark = document.createElement('div');

    checkmark.textContent = "○";
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
    //!this.parentElement.style.textDecoration || this.parentElement.style.textContent == 'none'
    if (this.textContent == '○'){
        this.parentElement.style.textDecoration="line-through"
        this.textContent = '●';
        console.log(this.parentElement.style.textDecoration)
    } else {
        console.log(this.parentElement.style.textDecoration)
        this.parentNode.remove()
    }  
}


export { setNewTask }