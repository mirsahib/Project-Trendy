import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

export interface ProductState {
    id:string
    title: string,
    price: number,
    rate: number
    image: string
    quantity?:number
}


interface initialStateType {
    itemList: ProductState[]
    totalQuantity:number
    total:number
}

const initialState: initialStateType = {
    itemList: [],
    totalQuantity:0,
    total:0
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ProductState>) {
            const newItem = action.payload
            const existItem = state.itemList.find(item => item.id === newItem.id)
            state.total += newItem.price
            if (existItem && existItem.quantity) {
                existItem.quantity++
            } else {
                newItem.quantity=1
                state.itemList.push(newItem)
                state.totalQuantity +=1
            }
            console.log(current(state))

        },
        removeFromCart(state,action:PayloadAction<ProductState>){
            const newItem = action.payload
            const existItem = state.itemList.find(item=>item.id===newItem.id)
            state.total -= newItem.price
            if(existItem?.quantity==1){
                state.itemList = state.itemList.filter(item=>item.id!==newItem.id)
                state.totalQuantity--
            }
            if(existItem && existItem.quantity){
                existItem.quantity--
            }
            console.log(current(state))
        }
    }
})

export const productAction = productSlice.actions
export default productSlice.reducer