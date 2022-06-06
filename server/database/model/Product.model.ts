import { DataTypes, Model } from "sequelize";
import PostgresService from "../PostgresService";

const sequelize = PostgresService.getInstance().getConnection()

class Product extends Model { }

Product.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false, 
        unique: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
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