import express,{Express} from 'express'
import cors from 'cors'
import UserApi from './api/user'
import ProductApi from './api/product'
import OrderApi from './api/order'
import AuthApi from './api/auth'

const app = async (app:Express)=>{
    app.use(express.json())
    app.use(cors())
    

    //app router
    new UserApi(app)
    new ProductApi(app)
    new OrderApi(app)
    new AuthApi(app)

}

export default app