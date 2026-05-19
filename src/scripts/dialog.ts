import { Priority } from "../interfaces/Todo.js";
import { buildContainer } from "./buildContainer.js";
import { addItem } from "./update.js";

const dialog = document.querySelector("#dialog") as HTMLDialogElement;



const addButton = document.querySelector("#add") as HTMLButtonElement;
const closeDialog = document.querySelector("#closeDialog") as HTMLButtonElement;
const saveButton = document.querySelector("#save") as HTMLButtonElement;

addButton.addEventListener("click", () => { 
    dialog.showModal();
})

closeDialog.addEventListener("click", () => { 
    dialog.close();
})

saveButton.addEventListener("click", () => { 

    event?.preventDefault();

    const title = document.querySelector("#title") as HTMLInputElement;

    const description = document.querySelector("#description") as HTMLTextAreaElement;

    const low = document.querySelector("#low") as HTMLInputElement;
    const medium = document.querySelector("#medium") as HTMLInputElement;
    const high = document.querySelector("#high") as HTMLInputElement;

    let priorityItem: Priority;
    if (low.checked) {
        priorityItem = Priority.LOW;
    } else if (medium.checked) {
        priorityItem = Priority.MEDIUM;
    } else {
        priorityItem = Priority.HIGH;
    }


    addItem(title.value, priorityItem, description.value);

    dialog.close();

    buildContainer();
})


export function editDialog(title: string, description: string, priority: Priority) {
    const dialogEdit = document.querySelector("#dialogEdit") as HTMLDialogElement;
    
    const titleEdit = document.querySelector("#titleEdit") as HTMLInputElement;

    titleEdit.value = title;

    const descriptionEdit = document.querySelector("#descriptionEdit") as HTMLTextAreaElement;

    descriptionEdit.value = description;

    if (priority === Priority.LOW) {
        const low = document.querySelector("#lowEdit") as HTMLInputElement;
        low.checked;

    } else if (priority === Priority.MEDIUM) {
        const medium = document.querySelector("#mediumEdit") as HTMLInputElement;
        medium.checked;


    } else {
        const high = document.querySelector("#highEdit") as HTMLInputElement;
        high.checked;
    }

    dialogEdit.showModal();


    const dialogEditButton = document.querySelector("#update") as HTMLButtonElement;

    dialogEditButton.addEventListener("click", () => {
        //TODO
    })


    const closeDialogEdit = document.querySelector("#closeDialogEdit") as HTMLButtonElement;

    closeDialogEdit.addEventListener("click", () => {
        dialogEdit.close();
    })


}





