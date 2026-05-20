import { Todo, Priority } from "../interfaces/Todo.js";
export declare function addItem(title: string, priority: Priority, description: string): void;
export declare function getLocal(): Array<Todo>;
export declare function updateItem(id: number, isChecked: boolean, title: string, description: string, priority: Priority): void;
export declare function removeItem(id: number): void;
//# sourceMappingURL=update.d.ts.map