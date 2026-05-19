export interface Todo {
    id: number;
    title: string;
    description: string;
    finishedDate?: Date;
    priority: Priority;
}
export declare enum Priority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high"
}
//# sourceMappingURL=Todo.d.ts.map