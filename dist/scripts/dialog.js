import { Priority } from "../interfaces/Todo.js";
import { buildContainer } from "./buildContainer.js";
import { addItem, updateItem } from "./update.js";
const dialog = document.querySelector("#dialog");
const addButton = document.querySelector("#add");
const closeDialog = document.querySelector("#closeDialog");
const saveButton = document.querySelector("#save");
// Add dialog
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const low = document.querySelector("#low");
const medium = document.querySelector("#medium");
const high = document.querySelector("#high");
// dialog EDIT
const dialogEdit = document.querySelector("#dialogEdit");
const titleEdit = document.querySelector("#titleEdit");
const descriptionEdit = document.querySelector("#descriptionEdit");
const dialogEditButton = document.querySelector("#update");
const lowEdit = document.querySelector("#lowEdit");
const mediumEdit = document.querySelector("#mediumEdit");
const highEdit = document.querySelector("#highEdit");
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
    title.value = "";
    description.value = "";
    low.checked = false;
    medium.checked = false;
    high.checked = false;
});
closeDialog.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});
saveButton.addEventListener("click", (e) => {
    e.preventDefault();
    let priorityItem;
    if (low.checked)
        priorityItem = Priority.LOW;
    if (medium.checked)
        priorityItem = Priority.MEDIUM;
    if (high.checked)
        priorityItem = Priority.HIGH;
    if (!priorityItem)
        return;
    addItem(title.value, priorityItem, description.value);
    dialog.close();
    buildContainer();
});
export function editDialog(title, description, priority, id, isChecked) {
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
        let priority;
        if (lowEdit.checked) {
            priority = Priority.LOW;
        }
        if (mediumEdit.checked) {
            priority = Priority.MEDIUM;
        }
        else {
            priority = Priority.HIGH;
        }
        updateItem(id, isChecked, titleEdit.value, descriptionEdit.value, priority);
        dialogEdit.close();
    });
    const closeDialogEdit = document.querySelector("#closeDialogEdit");
    closeDialogEdit.addEventListener("click", (e) => {
        e.preventDefault();
        dialogEdit.close();
    });
}
//# sourceMappingURL=dialog.js.map