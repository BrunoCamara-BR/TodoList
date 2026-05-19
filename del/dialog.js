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
});
export {};
//# sourceMappingURL=dialog.js.map