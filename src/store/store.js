import { configureStore } from '@reduxjs/toolkit'
import { taskSlice } from './slice/tasks/taskSlice'
import { titleSlice } from './slice/title/titleSlice'
import { displaySlice } from './slice/display/displaySlice'
import { dateSlice } from './slice/date/dateSlice'


export const store = configureStore({
    reducer: {
        task: taskSlice.reducer,
        title: titleSlice.reducer,
        display: displaySlice.reducer,
        date: dateSlice.reducer
    },
})