import UserModel from "../model/User.model";


export interface IUser {
    firstName: string,
    lastName: string
}

class UserRepository {
    
    createUser = async({firstName,lastName}:IUser)=> {
        const user = await new UserModel({ firstName, lastName })
        await user.save()
        console.log('User saved successfully')
        return user
    }
    read =async () => {
        const users = await UserModel.findAll()
        return users
    }
    readById =async(id:string)=>{
        const user = await UserModel.findByPk(id)
        return user
    }
    updateById=async(id:string,updatedField:Object)=>{
        const user = await UserModel.update(updatedField,{where:{id:id}})
        return user
    }
    deleteById=async(id:string)=>{
        const user = await UserModel.destroy({where:{id:id}})
        return user
    }
}

export default UserRepository