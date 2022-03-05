import { Express} from "express"
import OrderService from "../service/order.service"

class OrderApi{

    private app:Express
    private orderService:OrderService

    constructor(app:Express){
        this.app = app
        this.orderService = new OrderService

        //register routes
        this.app.get('/api/order',this.orderService.readAll)
        this.app.post('/api/order',this.orderService.create)
        this.app.get('/api/order:id',this.orderService.readByID)
        this.app.put('/api/order:id',this.orderService.updateById)
        this.app.delete('/api/order:id',this.orderService.deleteById)

    }
}


export default OrderApi