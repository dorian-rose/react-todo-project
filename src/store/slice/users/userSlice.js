import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({

    name: 'user',
    initialState: {
        // page: 1,
        email: "",
        token: null,
        isLoading: false,
        uid: ""
    },
    reducers: {
        startLoadingUsers: (state) => {
            state.isLoading = true;
        },
        setUser: (state, action) => {

            state.isLoading = false;
            //state.page = action.payload.page;
            state.details = action.payload.details;
            state.token = action.payload.token;
            state.email = action.payload.email;
            state.uid = action.payload.uid;
            // state.total_pages = action.payload.total_pages;
            // state.ok = action.payload.ok
            // state.error = action.payload.error
        }
    }

})

export const { setUser, startLoadingUsers } = userSlice.actions