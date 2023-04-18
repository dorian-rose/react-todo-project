import { useEffect, useReducer } from 'react'
import { todoReducer } from "../reducers/todoReducer"


const init = () => {
    return JSON.parse(localStorage.getItem("todoArray")) || [];

}

export const useTodoList = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);//init - retrieve task array from local
    console.log(todos)

    //set local
    const setLocal = () => {
        return localStorage.setItem("todoArray", JSON.stringify(todos));
    };
    //set local when change to todos, using useEffect
    useEffect(() => {
        setLocal()
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