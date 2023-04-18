import { useReducer } from 'react'

import { todoReducer } from "../reducers/todoReducer"

export const useTodoList = () => {

    const [todos, dispatch] = useReducer(todoReducer, []);//init - up to local here
    console.log(todos)


    const handleNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] add to do',
            payload: newTodo
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        console.log("in delete")
        const action = {
            type: '[TODO] delete to do',
            payload: id
        }
        dispatch(action)
    }

    const handleToggleTodo = (id) => {
        console.log("in toggle")
        const action = {
            type: '[TODO] toggle to do',
            payload: id
        }
        console.log(action)
        dispatch(action)
    }

    // const newList = useReducer([], action)
    // console.log(newList)
    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}