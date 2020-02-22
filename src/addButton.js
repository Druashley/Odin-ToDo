import { container, addButton } from "./domelements.js"
import { testTask } from "./todoObject.js"

// this is a test add button

function setNewTask () {
    const newTask = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskDescription = document.createElement('div');
    const taskDueDate = document.createElement('div');
    const taskPriority = document.createElement('div');
    const taskNotes = document.createElement('div')
   
    taskTitle.textContent = testTask.title;
    taskDescription.textContent = testTask.description;
    taskDueDate.textContent = testTask.dueDate;
    taskPriority.textContent = testTask.priority;
    taskNotes.textContent = testTask.notes;


    // newTask.innerHTML = `${testTask.title} due date is ${testTask.dueDate} and has the following notes: ${testTask.notes}.`
    newTask.classList.add("task");


    newTask.appendChild(taskTitle);
    newTask.appendChild(taskDescription);
    newTask.appendChild(taskDueDate);
    newTask.appendChild(taskPriority);
    newTask.appendChild(taskNotes);

    container.appendChild(newTask) 
//    container.appendChild(testTask.testMethod())
}

const setAddButton = () => {
    addButton.addEventListener("click", setNewTask)
}

export {setAddButton}