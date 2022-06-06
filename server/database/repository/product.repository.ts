import ProductModel from "../model/Product.model";


export interface IProduct {
    firstName: string,
    lastName: string
}

class ProductRepository {
    
    createProduct = async({firstName,lastName}:IProduct)=> {
        const user = await new ProductModel({ firstName, lastName })
        await user.save()
        console.log('Product saved successfully')
        return user
    }
    read =async () => {
        const users = await ProductModel.findAll()
        return users
    }
    readById =async(id:string)=>{
        const user = await ProductModel.findByPk(id)
        return user
    }
    updateById=async(id:string,updatedField:Object)=>{
        const user = await ProductModel.update(updatedField,{where:{id:id}})
        return user
    }
    deleteById=async(id:string)=>{
        const user = await ProductModel.destroy({where:{id:id}})
        return user
    }
}

export default ProductRepository