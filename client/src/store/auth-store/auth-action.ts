import { authAction } from "./auth-store"
import { AppDispatch } from ".."
import { NavigateFunction } from 'react-router-dom'
import.meta.env
export type IData = {
    id: string
    token: string,
    firstName?: string,
    lastName?: string
}
export const signUp = ({ firstName, lastName, email, password }: { firstName: string, lastName: string, email: string, password: string }, navigate: NavigateFunction) => {
    return async (dispatch: AppDispatch) => {
        const sendRequest = async () => {
            const res = await fetch('http://localhost:8080/api/user', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify({ firstName, lastName, email, password })
            })
            const data: IData = await res.json()
            localStorage.setItem('user', JSON.stringify({ id: data.id, token: data.token, firstName: firstName, lastName: lastName }))
            dispatch(authAction.logIn({ firstName, lastName }))
        }
        try {
            await sendRequest()
            navigate('/')
        } catch (error) {
            console.log('Sign up failed', error)
        }
    }
}
export const login = ({ email, password }: { email: string, password: string }, navigate: NavigateFunction) => {
    return async (dispatch: AppDispatch) => {
        const sendRequest = async () => {
            let result =false;
            const res = await fetch('http://localhost:8080/api/auth', {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify({ email, password })
            })
            
            if (res.status === 200) {
                const data:IData = await res.json();
                if (data && data.firstName && data.lastName) {
                    localStorage.setItem('user', JSON.stringify({ id: data.id, token: data.token, firstName: data.firstName, lastName: data.lastName }))
                    dispatch(authAction.logIn({ firstName: data.firstName, lastName: data.lastName }))
                }
                result = true
            }
            if (res.status === 404 || res.status === 400 || res.status === 500) {
                result =false
            }
            return result
        }
        try {
            const response = await sendRequest()
            if(response){
                navigate('/')
            }
        } catch (error) {
            console.log('Sign up failed')
        }
    }
}