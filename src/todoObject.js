// here we will be creating the object constructor for our todo object.

// things we will need
// title, description, dueDate, priority, notes, checklist


const todoTask = ({ title, description, dueDate, priority, notes }) => ({
    title,
    description,
    dueDate,
    priority,
    notes,
    testMethod: () => {
     return `The task titled ${title} has the following notes: ${notes}`
    },
    testMaker: () => {
        const newTask = document.createElement('div');
        newTask.textContent = `${title} due date is ${dueDate} and has the following notes: ${notes}.`;
        return newTask
    }

})



const testTask = todoTask({ title: 'Test', description: 'Test2', dueDate: '1/2/2020', priority: 'high', notes: 'this is a note' })

export { testTask }