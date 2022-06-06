import OrderModel from "../model/Order.model";


export interface IOrder {
    firstName: string,
    lastName: string
}

class OrderRepository {
    
    createOrder = async({firstName,lastName}:IOrder)=> {
        const user = await new OrderModel({ firstName, lastName })
        await user.save()
        console.log('Order saved successfully')
        return user
    }
    read =async () => {
        const users = await OrderModel.findAll()
        return users
    }
    readById =async(id:string)=>{
        const user = await OrderModel.findByPk(id)
        return user
    }
    updateById=async(id:string,updatedField:Object)=>{
        const user = await OrderModel.update(updatedField,{where:{id:id}})
        return user
    }
    deleteById=async(id:string)=>{
        const user = await OrderModel.destroy({where:{id:id}})
        return user
    }
}

export default OrderRepository