import { Request,Response } from "express"

class OrderService{

    constructor(){}

    create(req:Request,res:Response){
        res.send('create order')
    }
    readAll(req:Request,res:Response){
        res.send('read all order')
    }
    readByID(req:Request,res:Response){
        res.send('read order by id')
    }
    updateById(req:Request,res:Response){
        res.send('update order by id')
    }
    deleteById(req:Request,res:Response){
        res.send('delete order by id')
    }
}

export default OrderService