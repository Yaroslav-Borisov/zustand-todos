import { nanoid } from "nanoid";
import { create } from "zustand";


export interface TodoType {
    id: string;
    text: string;
    doneStatus: boolean;
}

interface initialState {
    todos: TodoType[],
    loading: boolean,
    error: string | null,
    addTodo: (title: string) => void
    changeTodoDoneStatus: (id: string) => void
    deleteTodo: (id: string) => void
}

export const useTodos = create<initialState>(set => ({
    todos: [
        {
            id: '1',
            text: 'Выучить английский',
            doneStatus: false,
        },
        {
            id: '2',
            text: 'Выучить китайский',
            doneStatus: true,
        },
        {
            id: '3',
            text: 'Выучить фронтердерский',
            doneStatus: false,
        },
    ],
    loading: false,
    error: null,
    addTodo: (title: string) => set((state) => {
        const newTodo = {
            id: nanoid(),
            text: title,
            doneStatus: false
        }

        return { todos: [...state.todos, newTodo] }
    }),
    changeTodoDoneStatus: (id: string) => set((state) => {
        const index = state.todos.findIndex(todo => todo.id === id);
        return {
            todos: [
                ...state.todos.slice(0, index),
                { ...state.todos[index], doneStatus: !state.todos[index].doneStatus },
                ...state.todos.slice(index + 1)
            ]
        }
    }),
    deleteTodo: (id: string) => set((state) => {
        const index = state.todos.findIndex(todo => todo.id === id);
        return {
            todos: [
                ...state.todos.slice(0, index),
                ...state.todos.slice(index + 1)
            ]
        }
    })
}))