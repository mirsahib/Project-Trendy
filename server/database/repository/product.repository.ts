import ProductModel from "../model/Product.model";


class ProductRepository {
    
    createProduct = async({title,price,rating,image}:ProductModel)=> {
        const product = await new ProductModel({ title, price,rating ,image})
        await product.save()
        return product
    }
    read =async () => {
        const products = await ProductModel.findAll()
        return products
    }
    readById =async(id:string)=>{
        const product = await ProductModel.findByPk(id)
        return product
    }
    updateById=async(id:string,updatedField:Object)=>{
        const product = await ProductModel.update(updatedField,{where:{id:id}})
        return product
    }
    deleteById=async(id:string)=>{
        const product = await ProductModel.destroy({where:{id:id}})
        return product
    }
}

export default ProductRepository