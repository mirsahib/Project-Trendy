import {  Request, Response } from "express"
import OrderRepository, { IOrder } from "../database/repository/order.repository"


class OrderService {
    private OrderRepository: OrderRepository

    constructor() {
        this.OrderRepository = new OrderRepository()
    }

    create = async (req: Request, res: Response) => {
        try {
            const { firstName, lastName }: IOrder = req.body
            const user = await this.OrderRepository.createOrder({ firstName, lastName })
            res.json({ 'user': user })
        } catch (error) {
            console.log('Order saved failed', error)
            res.json({ "message": error })
        }
    }
    readAll = async (req: Request, res: Response) => {
        try {
            const users = await this.OrderRepository.read()
            res.json({ 'Orders': users })
        } catch (error) {
            res.json({ "error": error })
        }
    }
    readByID=async(req: Request, res: Response) =>{
        try {
            const id = req.params.id
            const user = await this.OrderRepository.readById(id)
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
            const updatedOrder = await this.OrderRepository.updateById(id,req.body)
            if(updatedOrder!=null){
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
            const deletedOrder = await this.OrderRepository.deleteById(id)
            if(deletedOrder!=null){
                res.json({"message":"user is deleted"})
            }else{
                res.json({"message":"user not found"})
            }
        } catch (error) {
            res.json({"error":error})
        }
    }

}

export default OrderService