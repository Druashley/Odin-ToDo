import { completeButton, container } from "./domelements.js"


completeButton.addEventListener("click", completeAllFunction);



function completeAllFunction() {
    if (this.textContent == "○"){
        this.textContent = "●";   
        for (let i = 0; i < container.childElementCount; i++){
            container.children[i].firstElementChild.textContent = "●";
            container.children[i].style.textDecoration = "line-through";
            //container.children[i].classList.add(".task-complete")
        }    
    } else {
        this.textContent = "○";   
        for (let i = 0; i < container.childElementCount; i++){
            container.children[i].firstElementChild.textContent = "○";
            container.children[i].style.textDecoration = "none";
        }
} 
    //while (container.childElementCount > 0) {
     //   container.removeChild(container.lastChild)
   // }
}

const completeAllButton = () => {completeButton}



export { completeAllButton }