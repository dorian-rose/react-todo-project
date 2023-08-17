import { createSlice } from '@reduxjs/toolkit'
import { format } from "date-fns";


export const dateSlice = createSlice({

    name: 'date',
    initialState: {
        date: format(new Date(), "EEE dd MMM yy"),


    },
    reducers: {

        setDate: (state, action) => {

            state.date = action.payload

        }

    }

})

export const { setDate } = dateSlice.actions