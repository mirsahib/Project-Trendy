import express,{Express} from 'express'
import UserApi from './api/user'
import ProductApi from './api/product'
import OrderApi from './api/order'

const app = async (app:Express)=>{
    app.use(express.json())
    

    //app router
    UserApi(app)
    ProductApi(app)
    OrderApi(app)

}

export default app