import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

    name: 'user',
    initialState: {
        email: "",
        uid: "",
        displayName: "",
        photoURL: ""
    },
    reducers: {

        setUser: (state, action) => {
            console.log('Action payload:', action.payload);
            state.displayName = action.payload.displayName,
            state.email = action.payload.email,
            state.uid = action.payload.uid,
            state.photoURL = action.payload.photoURL

        }

    }

})

export const { setUser } = userSlice.actions