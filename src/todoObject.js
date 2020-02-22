// here we will be creating the object constructor for our todo object.

// things we will need
// title, description, dueDate, priority, notes, checklist
import { format, compareAsc, set } from 'date-fns'

const todoTask = ({ title, description, dueDate, priority, notes }) => ({
    title,
    description,
    dueDate,
    priority,
    notes,
    testMethod: () => {
     return `The task titled ${title} has the following notes: ${notes}`
    },
});

let testDate = format(new Date(2022, 1, 11), 'MM/dd/yyyy')

const testTask = todoTask({ title: 'Test', description: 'Test2', dueDate: testDate, priority: 'high', notes: 'this is a note' })

export { testTask, todoTask }