import { configureStore,  } from "@reduxjs/toolkit";


import userReducer from "./userslice"

	export default configureStore ({
    	    reducer:{
            // user here is the state name and userReducer is our reducer name
            user: userReducer,
    	    }
        })