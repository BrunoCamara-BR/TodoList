import { Todo, Priority } from "../interfaces/Todo.js";

// const item: Todo = {
//     id: idGenerator(),
//     title: "Title Example",
//     description: "Description Example",
//     priority: Priority.HIGH
// }

function idGenerator(): number {
    const data = getLocal();

    const idList = data.reduce(
        (acc: number[], item) => {
            acc.push(item.id);
            return acc;
    }, [])

    let newid: number;

    do {
        newid = Math.floor(
            Math.random() * (999 - 100 + 1) + 100
        );

    } while (idList.includes(newid));

    return newid

}


export function addItem(title: string, priority: Priority, description: string): void {

    const newItem: Todo = {
    id: idGenerator(), 
    title: title,
    description: description,
    priority: priority
    }

    updateLocal(newItem)
}

export function getLocal(): Array<Todo> {
    return JSON.parse(localStorage.getItem("list") || "[]");
}

function setLocal(array: Array<Todo>): void {
    localStorage.setItem("list", JSON.stringify(array))
}

function updateLocal(item: Todo): void {
    const data = getLocal();
    data.push(item)
    setLocal(data);
}

export function updateItem(id: number, isChecked: boolean): void {
    const data = getLocal();

    const item = data.find(element => element.id === id);

    if (!item) return;

    if (isChecked) {
        item.finishedDate = new Date(Date.now());
    } else {
        delete item.finishedDate;
    }

    setLocal(data);

}

