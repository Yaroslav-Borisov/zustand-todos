import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { BASE_URL, TodoType } from "../const";
import axios from "axios";

interface initialState {
    todos: TodoType[],
    loading: boolean,
    error: string | null,
    addTodo: (title: string) => void
    changeTodoDoneStatus: (todo: TodoType) => void
    deleteTodo: (todo: TodoType) => void
    getTodos: () => void
}

export const useTodos = create(devtools<initialState>((set, get) => ({
    todos: [],
    loading: false,
    error: null,

    addTodo: async (title: string) => {
        set({ loading: true })
        const newTodo: TodoType = {
            title,
            completed: false
        }
        try {
            const { data } = await axios.post(`${BASE_URL}`, newTodo)
            set((state) => ({ todos: [...state.todos, data] }))
            set({ loading: false })
        } catch (error) {
            set({ error: String(error), loading: false })
        }
    },
    changeTodoDoneStatus: async (todoItem: TodoType) => {
        set({ loading: true })
        const index = get().todos.findIndex(todo => todo.id === todoItem.id)

        try {
            const { data } = await axios.put(`${BASE_URL}${todoItem.id}`, { ...todoItem, completed: !todoItem.completed })
            set((state) => ({
                todos: [
                    ...state.todos.slice(0, index),
                    data,
                    ...state.todos.slice(index + 1)
                ],
                loading: false
            }))
        } catch (error) {
            set({ error: String(error), loading: false })
        }
    },
    deleteTodo: async (todoItem: TodoType) => {
        set({ loading: true })
        const index = get().todos.findIndex(todo => todo.id === todoItem.id)

        try {
            await axios.delete(`${BASE_URL}${todoItem.id}`)
            set((state) => ({
                todos: [
                    ...state.todos.slice(0, index),
                    ...state.todos.slice(index + 1)
                ],
                loading: false
            }))
        } catch (error) {
            set({ error: String(error), loading: false })
        }
    },
    getTodos: async () => {
        set({ loading: true })
        try {
            const { data } = await axios.get<TodoType[]>('https://jsonplaceholder.typicode.com/todos', { params: { _limit: 4 } })
            set({ todos: data, loading: false })
        } catch (error) {
            set({ error: String(error), loading: false })
        }
    }
})))