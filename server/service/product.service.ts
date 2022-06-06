import {  Request, Response } from "express"
import ProductRepository, { IProduct } from "../database/repository/product.repository"


class ProductService {
    private ProductRepository: ProductRepository

    constructor() {
        this.ProductRepository = new ProductRepository()
    }

    create = async (req: Request, res: Response) => {
        try {
            const { firstName, lastName }: IProduct = req.body
            const user = await this.ProductRepository.createProduct({ firstName, lastName })
            res.json({ 'user': user })
        } catch (error) {
            console.log('Product saved failed', error)
            res.json({ "message": error })
        }
    }
    readAll = async (req: Request, res: Response) => {
        try {
            const users = await this.ProductRepository.read()
            res.json({ 'Products': users })
        } catch (error) {
            res.json({ "error": error })
        }
    }
    readByID=async(req: Request, res: Response) =>{
        try {
            const id = req.params.id
            const user = await this.ProductRepository.readById(id)
            if(user!=null){
                res.json({"user":user})
            }else{
                res.json({"message":"user not found"})
            }
        } catch (error) {
            res.json({"error":error})
        }

    }
    updateById=async(req: Request, res: Response) =>{
        try {
            const id = req.params.id
            const updatedProduct = await this.ProductRepository.updateById(id,req.body)
            if(updatedProduct!=null){
                res.json({"message":"user updated"})
            }else{
                res.json({"message":"user not found"})
            }
        } catch (error) {
            res.json({"error":error})
        }
    }
    deleteById=async (req: Request, res: Response) =>{
        try {
            const id = req.params.id
            const deletedProduct = await this.ProductRepository.deleteById(id)
            if(deletedProduct!=null){
                res.json({"message":"user is deleted"})
            }else{
                res.json({"message":"user not found"})
            }
        } catch (error) {
            res.json({"error":error})
        }
    }

}

export default ProductService