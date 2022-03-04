import { Express,Request,Response } from "express"

const UserApi = (app:Express)=>{
    app.get('/api/user',(req:Request,res:Response)=>{
        res.send('user')
    })
}

export default UserApi