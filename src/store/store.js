import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slice/users/userSlice'

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
})