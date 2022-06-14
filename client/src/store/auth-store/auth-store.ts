import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface AuthState{
    isLoggedIn:boolean
    firstName:string|null
    lastName:string|null
}
interface AuthActionPayload{
    firstName:string
    lastName:string
}
const initialState:AuthState={
    firstName:null,
    lastName:null,
    isLoggedIn:false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logIn(state,actions:PayloadAction<AuthActionPayload>){
            state.isLoggedIn=true
            state.firstName = actions.payload.firstName
            state.lastName = actions.payload.lastName
        },
        logOut(state){
            state.isLoggedIn=false
        }
    }
})

export const authAction = authSlice.actions
export default authSlice.reducer