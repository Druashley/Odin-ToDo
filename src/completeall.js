import { completeButton, container } from "./domelements.js"


completeButton.addEventListener("click", completeAllFunction);



function completeAllFunction() {
    this.textContent = "●"
    while (container.childElementCount > 0) {
        container.removeChild(container.lastChild)
    }
}

const completeAllButton = () => {completeButton}



export { completeAllButton }