import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({

    name: 'task',
    initialState: {
        todos: [],
        isLoading: false
    },
    reducers: {
        startLoadingTasks: (state) => {
            state.isLoading = true;
        },
        setTask: (state, action) => {

            state.isLoading = false;
            state.todos = action.payload.todos;
            state.ok = action.payload.ok;
            state.msg = action.payload.msg;

        }
    }

})

export const { setTask, startLoadingTasks } = taskSlice.actions