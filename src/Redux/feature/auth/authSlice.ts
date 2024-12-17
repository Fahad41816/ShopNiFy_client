/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
};

const Authslice = createSlice({
    name: "AuthSlice",
    initialState: initialState,
    reducers: {
        userLogin: (state : any, payload)=>{
            state.user = payload.payload
        },
        userLogout : (state) => {
            state.user = null 
        }
    }
})

export const {userLogin, userLogout} = Authslice.actions
export default Authslice