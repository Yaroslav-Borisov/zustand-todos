export type TodoType = {
    userId?: number
    id?: number,
    title: string,
    completed: boolean,
}

export enum FilterType {
    All = 'All',
    Active = 'Active',
    Done = 'Done'
}

export const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/'