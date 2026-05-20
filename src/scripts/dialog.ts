import { Priority } from "../interfaces/Todo.js";
import { buildContainer } from "./buildContainer.js";
import { addItem, updateItem } from "./update.js";

const dialog = document.querySelector("#dialog") as HTMLDialogElement;



const addButton = document.querySelector("#add") as HTMLButtonElement;
const closeDialog = document.querySelector("#closeDialog") as HTMLButtonElement;
const saveButton = document.querySelector("#save") as HTMLButtonElement;



// Add dialog
const title = document.querySelector("#title") as HTMLInputElement;
const description = document.querySelector("#description") as HTMLTextAreaElement;
const low = document.querySelector("#low") as HTMLInputElement;
const medium = document.querySelector("#medium") as HTMLInputElement;
const high = document.querySelector("#high") as HTMLInputElement;

// dialog EDIT
const dialogEdit = document.querySelector("#dialogEdit") as HTMLDialogElement;
const titleEdit = document.querySelector("#titleEdit") as HTMLInputElement;
const descriptionEdit = document.querySelector("#descriptionEdit") as HTMLTextAreaElement;
const dialogEditButton = document.querySelector("#update") as HTMLButtonElement;
const lowEdit = document.querySelector("#lowEdit") as HTMLInputElement;
const mediumEdit = document.querySelector("#mediumEdit") as HTMLInputElement;
const highEdit = document.querySelector("#highEdit") as HTMLInputElement;




addButton.addEventListener("click", (e) => { 
    e.preventDefault();
    dialog.showModal();

    title.value = "";
    description.value = "";
    low.checked = false;
    medium.checked = false;
    high.checked = false;
})

closeDialog.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
})

saveButton.addEventListener("click", (e) => {

    e.preventDefault();

    let priorityItem!: Priority;

    if (low.checked) priorityItem = Priority.LOW
    if (medium.checked) priorityItem = Priority.MEDIUM
    if (high.checked) priorityItem = Priority.HIGH

    if (!priorityItem) return;

    addItem(title.value, priorityItem, description.value);

    dialog.close();

    buildContainer();
})


export function editDialog(title: string, description: string, priority: Priority, id: number, isChecked: boolean) {
    
    titleEdit.value = title;
    descriptionEdit.value = description;

    
    if (priority === "low") {
        lowEdit.checked = true;
    }
    if (priority === "medium") {
        mediumEdit.checked = true;
    } 
    if (priority === "high") {
        highEdit.checked = true;
    }

    dialogEdit.showModal();

    dialogEditButton.addEventListener("click", (e) => {
        
        // e.preventDefault();

    let priority: Priority;
    if (lowEdit.checked) {
        priority = Priority.LOW;

        }
        if (mediumEdit.checked) {
        priority = Priority.MEDIUM;

    } else {
        priority = Priority.HIGH;
    }

        updateItem(id, isChecked, titleEdit.value, descriptionEdit.value, priority);

        dialogEdit.close();

    })


    const closeDialogEdit = document.querySelector("#closeDialogEdit") as HTMLButtonElement;


    closeDialogEdit.addEventListener("click", (e) => {
        e.preventDefault();
        dialogEdit.close();
    })


}





