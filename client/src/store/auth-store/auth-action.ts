import { authAction } from "./auth-store"
import { AppDispatch } from ".."
type IData={
    id:string
    token:string
}
export const signUp = ({ firstName, lastName, email, password }: { firstName: string, lastName: string, email: string, password: string }) => {
    return async (dispatch: AppDispatch) => {
        const sendRequest = async () => {
            const res = await fetch('http://localhost:8080/api/user', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify({ firstName, lastName, email, password })
            })
            const data:IData = await res.json()
            localStorage.setItem('user',JSON.stringify({id:data.id,token:data.token}))
            dispatch(authAction.logIn({firstName,lastName}))
        }
        try {
            console.log('iam here')
            await sendRequest()
        } catch (error) {
            console.log('Sign up failed', error)
        }
    }
}
export const login = ({ email, password }: { email: string, password: string }) => {
    return async (dispatch: AppDispatch) => {
        const sendRequest = async () => {
            const res = await fetch('', {
                method: 'POST',
                body: JSON.stringify({ email, password })
            })
            //dispatch(authAction.logIn())

        }
        try {
            await sendRequest()
        } catch (error) {
            console.log('Sign up failed')
        }
    }
}