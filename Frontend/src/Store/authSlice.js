import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  
  
  export const Register = createAsyncThunk(
    "authReducer/register",
    async (registerModel, { getState }) => {
      const response = await axios.post("http://localhost:50100/api/Register", registerModel, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.data;
      return data;
    }
  );
  export const Login = createAsyncThunk(
    "authReducer/login",
    async (loginModel, { getState }) => {
      const response = await axios.post("/Login", loginModel, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.data;
      return data;
    }
  );
  
  const authAdapter=createEntityAdapter({});
  
  
  const authSlice=createSlice({
      name:"authReducer",
      initialState:authAdapter.getInitialState({
          
      }),
      reducer:{
      },
      extraReducers:{
          [Login.fulfilled]:(state,action)=>{
              if(action.payload.status !=="Error")
              {
                  const {payload} =action;
                  if(payload){
                      authAdapter.addOne(state,payload);
                  }
              }
          },
          [Register.fulfilled]:(state,action)=>{
            if(action.payload.status !=="Error")
            {
                const {payload} =action;
                if(payload){
                    authAdapter.addOne(state,payload);
                }
            }
        },
      }
  });
  
  export const {
      
  }=authSlice.actions;
  
  export default authSlice.reducer;