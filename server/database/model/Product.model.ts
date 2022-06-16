import { DataTypes, Model } from "sequelize";
import PostgresService from "../PostgresService";

const sequelize = PostgresService.getInstance().getConnection()

class Product extends Model {
    declare id:string
    declare title:string
    declare price:number
    declare rating:number
    declare image:string
 }

Product.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false, 
        unique: true,
        primaryKey: true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price: {
        type: DataTypes.DOUBLE,
    },
    rating: {
        type: DataTypes.DOUBLE
        // allowNull defaults to true
    },
    image:{
        type:DataTypes.STRING
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Product' // We need to choose the model name
})

Product.sync().catch(error => {
    console.log('Failed to create Product table', error)
})

export default Product