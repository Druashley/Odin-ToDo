import { todoTask } from "./todoObject.js"
import { format, compareAsc, set, add } from 'date-fns'
import { setNewTask } from "./addButton.js"
import { addButton } from "./domelements.js"




let addDate = add(new Date(), {
    days: Math.floor(Math.random() * 100),
  });

let setDate = format(addDate, 'MM/dd/yyyy');

const firstTask = todoTask({ title: 'Lorem ipsum dolor.', description: "Lorem ipsum dolor sit.", dueDate: setDate, priority: "High", notes: "quis nostrud exercitation ullamco" })
const secondTask = todoTask({ title: 'Excepteur', description: "occaecat cupidatat non proiden", dueDate: setDate, priority: "Medium", notes: "culpa qui officia" })




const exampleArray = [firstTask, secondTask]

function setExampleTask () {
    for (let i = 0; i < exampleArray.length; i++){
        setNewTask(exampleArray[i])
    }
}




const setAddButton = () => {
    addButton.addEventListener("click", setExampleTask)
}
export { setAddButton }