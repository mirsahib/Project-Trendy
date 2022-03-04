import { Express,Request,Response } from "express"

const OrderApi = (app:Express)=>{
    app.get('/api/order',(req:Request,res:Response)=>{
        res.send('Order')
    })
}

export default OrderApi