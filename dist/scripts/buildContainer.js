import { getLocal, removeItem, updateItem } from "./update.js";
import { editDialog } from "./dialog.js";
export function buildContainer() {
    const container = document.querySelector("#todo-container");
    container.innerHTML = ``;
    const ul = document.createElement("ul");
    const data = getLocal();
    data.forEach(item => {
        const pFinishedDate = document.createElement("p");
        pFinishedDate.classList.add("finish-info");
        const li = document.createElement("li");
        li.innerHTML = `
            <p class="title">
            ${item.title} <span class="priority"> - ${item.priority}</span>
            </p>
            <p class="id">id:${item.id}</p>
            <p class="description">Description:</p>
            <p class="desc-info">${item.description}</p>
            <p class="finish">Finished date:</p>
            `;
        const checkbox = document.createElement("input");
        checkbox.classList.add("check");
        checkbox.setAttribute("type", "checkbox");
        if (item.finishedDate != null) {
            const today = new Date(item.finishedDate);
            const formatDate = new Intl.DateTimeFormat("pt-BR", {
                dateStyle: "short",
                timeStyle: "short"
            }).format(today);
            pFinishedDate.innerHTML = `${formatDate}`;
            li.appendChild(pFinishedDate);
            checkbox.checked = true;
        }
        li.appendChild(checkbox);
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                pFinishedDate.innerHTML = `${new Date()}`;
                updateItem(item.id, true, item.title, item.description, item.priority);
            }
            else {
                pFinishedDate.innerHTML = ``;
                updateItem(item.id, false, item.title, item.description, item.priority);
            }
            buildContainer();
        });
        const divOption = document.createElement("div");
        divOption.classList.add("option");
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        // editButton.classList.add("editButton")
        editButton.addEventListener("click", () => {
            let check;
            if (item.finishedDate != null) {
                check = true;
            }
            else {
                check = false;
            }
            editDialog(item.title, item.description, item.priority, item.id, check);
        });
        divOption.appendChild(editButton);
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        // removeButton.classList.add("removeButton")
        removeButton.addEventListener("click", () => {
            removeItem(item.id);
            buildContainer();
        });
        divOption.appendChild(removeButton);
        li.appendChild(divOption);
        ul.appendChild(li);
    });
    container.appendChild(ul);
}
//# sourceMappingURL=buildContainer.js.map