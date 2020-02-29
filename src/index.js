import { setAddButton } from "./testbutton.js"
import { buttonClick } from "./taskmaker.js"
import { completeAllButton } from "./completeall.js"
import { removeButton  } from "./removeallbutton.js"


function startUp () {
    setAddButton();
    buttonClick();
    completeAllButton();
    removeButton();
}


startUp();