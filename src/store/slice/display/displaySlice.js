import { createSlice } from '@reduxjs/toolkit'

export const displaySlice = createSlice({

    name: 'display',
    initialState: {
        showAll: false,


    },
    reducers: {

        setShowAll: (state, action) => {

            state.showAll = action.payload

        }

    }

})

export const { setShowAll } = displaySlice.actions