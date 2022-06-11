import { authAction } from "./auth-store"
import { AppDispatch } from ".."
export const signUp=({fname,lname,email,password}:{fname:string,lname:string,email:string,password:string})=>{
    return async(dispatch:AppDispatch)=>{
        const sendRequest = async()=>{
            const res = await fetch('',{
                method:'POST',
                body:JSON.stringify({fname,lname,email,password})
            })
            dispatch(authAction.logIn())
            
        }
        try {
            await sendRequest()
        } catch (error) {
            console.log('Sign up failed')
        }
    }
}
export const login=({email,password}:{email:string,password:string})=>{
    return async(dispatch:AppDispatch)=>{
        const sendRequest = async()=>{
            const res = await fetch('',{
                method:'POST',
                body:JSON.stringify({email,password})
            })
            dispatch(authAction.logIn())
            
        }
        try {
            await sendRequest()
        } catch (error) {
            console.log('Sign up failed')
        }
    }
}