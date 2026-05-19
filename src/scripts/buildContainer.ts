import { getLocal, updateItem } from "./update.js";
import { editDialog } from "./dialog.js";

export function buildContainer(): void {
    const container = document.querySelector("#todo-container") as HTMLDivElement;
    container.innerHTML = ``;
    
    const ul = document.createElement("ul");
    const data = getLocal()
    
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
            `
        const checkbox = document.createElement("input");
        checkbox.classList.add("check");
        checkbox.setAttribute("type", "checkbox");

        if (item.finishedDate != null) {
            pFinishedDate.innerHTML = `${item.finishedDate}`;
            li.appendChild(pFinishedDate);

            checkbox.checked = true;
        }

        li.appendChild(checkbox);

        checkbox.addEventListener("change", () => {

            if (checkbox.checked) { 

                pFinishedDate.innerHTML = `${new Date()}`

                updateItem(item.id, true);

                
            } else {
                pFinishedDate.innerHTML = ``;

                updateItem(item.id, false);
            }
        })



        const divOption = document.createElement("div");
        divOption.classList.add("option");

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.addEventListener("click", () => {

            editDialog(item.title, item.description, item.priority)

        })


        divOption.appendChild(editButton);
        
        const removeButton = document.createElement("button");
        
        removeButton.textContent = "Remove";
        
        //TODO

        divOption.appendChild(removeButton);

        li.appendChild(divOption);

    
        ul.appendChild(li);
    });


    container.appendChild(ul);

}