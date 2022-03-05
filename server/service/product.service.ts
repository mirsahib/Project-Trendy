import { Request,Response } from "express"

class ProductService{

    constructor(){}

    create(req:Request,res:Response){
        res.send('create product')
    }
    readAll(req:Request,res:Response){
        res.send('read all product')
    }
    readByID(req:Request,res:Response){
        res.send('read product by id')
    }
    updateById(req:Request,res:Response){
        res.send('update product by id')
    }
    deleteById(req:Request,res:Response){
        res.send('delete product by id')
    }
}

export default ProductService