import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from './auth-store/auth-store'
import productReducer from './product-store/product-store'

const store = configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = ()=>useDispatch<AppDispatch>()

export default store