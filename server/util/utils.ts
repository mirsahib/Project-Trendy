
import jwt from 'jsonwebtoken'
const generateToken =async (payload:string) => {
    return await jwt.sign(payload,'APP_SECRET',{expiresIn:'1d'})
}

export default generateToken