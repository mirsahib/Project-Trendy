import { Express,Request,Response } from "express"

const ProductApi = (app:Express)=>{
    app.get('/api/product',(req:Request,res:Response)=>{
        res.send('product')
    })
}

export default ProductApi