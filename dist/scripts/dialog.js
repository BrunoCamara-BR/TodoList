import { Priority } from "../interfaces/Todo.js";
import { buildContainer } from "./buildContainer.js";
import { addItem } from "./update.js";
const dialog = document.querySelector("#dialog");
const addButton = document.querySelector("#add");
const closeDialog = document.querySelector("#closeDialog");
const saveButton = document.querySelector("#save");
addButton.addEventListener("click", () => {
    dialog.showModal();
});
closeDialog.addEventListener("click", () => {
    dialog.close();
});
saveButton.addEventListener("click", () => {
    event?.preventDefault();
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const low = document.querySelector("#low");
    const medium = document.querySelector("#medium");
    const high = document.querySelector("#high");
    let priorityItem;
    if (low.checked) {
        priorityItem = Priority.LOW;
    }
    else if (medium.checked) {
        priorityItem = Priority.MEDIUM;
    }
    else {
        priorityItem = Priority.HIGH;
    }
    addItem(title.value, priorityItem, description.value);
    dialog.close();
    buildContainer();
});
export function editDialog(title, description, priority) {
    const dialogEdit = document.querySelector("#dialogEdit");
    const titleEdit = document.querySelector("#titleEdit");
    titleEdit.value = title;
    const descriptionEdit = document.querySelector("#descriptionEdit");
    descriptionEdit.value = description;
    if (priority === Priority.LOW) {
        const low = document.querySelector("#lowEdit");
        low.checked;
    }
    else if (priority === Priority.MEDIUM) {
        const medium = document.querySelector("#mediumEdit");
        medium.checked;
    }
    else {
        const high = document.querySelector("#highEdit");
        high.checked;
    }
    dialogEdit.showModal();
    const dialogEditButton = document.querySelector("#update");
    dialogEditButton.addEventListener("click", () => {
        //TODO
    });
    const closeDialogEdit = document.querySelector("#closeDialogEdit");
    closeDialogEdit.addEventListener("click", () => {
        dialogEdit.close();
    });
}
//# sourceMappingURL=dialog.js.map