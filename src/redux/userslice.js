import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        username: "felix03",
        name: "felix",
        email:"felix@gmail.com",
        phone:"07038262827",
        address:"miango",
        dob: "02.05.1994",
        img: "../img/7.jpeg",
       
    },
    reducers:{
        update: (state,action) =>{
            state.username = action.payload.username
            state.name = action.payload.name
            state.email = action.payload.email
            state.phone = action.payload.phone
            state.address = action.payload.address
            state.dob = action.payload.dob
            state.img = action.payload.img
            
        }
    }
});

export const {update} = userSlice.actions;
export default userSlice.reducer;