// const item: Todo = {
//     id: idGenerator(),
//     title: "Title Example",
//     description: "Description Example",
//     priority: Priority.HIGH
// }
function idGenerator() {
    const data = getLocal();
    const idList = data.reduce((acc, item) => {
        acc.push(item.id);
        return acc;
    }, []);
    let newid;
    do {
        newid = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    } while (idList.includes(newid));
    return newid;
}
export function addItem(title, priority, description) {
    const newItem = {
        id: idGenerator(),
        title: title,
        description: description,
        priority: priority
    };
    updateLocal(newItem);
}
export function getLocal() {
    return JSON.parse(localStorage.getItem("list") || "[]");
}
function setLocal(array) {
    localStorage.setItem("list", JSON.stringify(array));
}
function updateLocal(item) {
    const data = getLocal();
    data.push(item);
    setLocal(data);
}
export function updateItem(id, isChecked) {
    const data = getLocal();
    const item = data.find(element => element.id === id);
    if (!item)
        return;
    if (isChecked) {
        item.finishedDate = new Date(Date.now());
    }
    else {
        delete item.finishedDate;
    }
    setLocal(data);
}
//# sourceMappingURL=update.js.map