import { NextFunction, Request, Response } from "express"
import UserRepository, { IUser } from "../database/repository/user.repository"
import generateToken from "../util/utils"

class AuthService {
    private UserRepository: UserRepository

    constructor() {
        this.UserRepository = new UserRepository()
    }

    signIn = async (req: Request, res: Response) => {
        const { email, password } = req.body

        try {
            const user = await  this.UserRepository.findByEmail(email)
            if (!user) {
                return res.status(404).json({error:'User not found'})
            }
            if(user && user.password!==password){
                return res.status(401).json({error:'Password don\'t match'})
            }
            const token = await generateToken(user.id)
            
            return res.status(200).json(
                {user:user.id,token:token}
            ) 
        } catch (error) {
            return res.status(401).json({
                error: "Could not sign in"
            })
        }
    }



}

export default AuthService