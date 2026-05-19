export interface Todo {
    id: number 
    title: string
    description: string
    finishedDate?: Date
    priority: Priority
}

export enum Priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH =  'high'
}