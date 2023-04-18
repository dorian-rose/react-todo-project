import React, { useReducer } from 'react'

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

    }

    const handleToggleTodo = (id) => {

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