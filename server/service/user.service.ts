import { Request,Response } from "express"

class UserService{

    constructor(){}

    create(req:Request,res:Response){
        res.send('create user')
    }
    readAll(req:Request,res:Response){
        res.send('read all user')
    }
    readByID(req:Request,res:Response){
        res.send('read user by id')
    }
    updateById(req:Request,res:Response){
        res.send('update user by id')
    }
    deleteById(req:Request,res:Response){
        res.send('delete user by id')
    }
}

export default UserService