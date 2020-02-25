import { setAddButton } from "./testbutton.js"
import { buttonClick } from "./taskmaker.js"
import { completeAllButton } from "./completeall.js"


function startUp () {
    setAddButton();
    buttonClick();
    completeAllButton();
}


startUp();