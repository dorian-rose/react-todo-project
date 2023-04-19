import { useEffect, useReducer } from 'react'
import { todoReducer } from "../reducers/todoReducer"


import { getLocal, setLocal } from '../../helper/localStorage';

const init = () => getLocal()


export const useTodoList = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);//init - up to local here


    //set local when change to todos, using useEffect
    useEffect(() => {
        setLocal(todos)
    }, [todos])


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

    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}