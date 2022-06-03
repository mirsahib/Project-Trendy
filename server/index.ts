import express,{Express} from 'express'
import expressApp from './express'
import connection from './database/connection'



const server = async()=>{
    const app:Express = express()
    
    await expressApp(app)
 
    //database connection  
    //await connection()

    app.listen(3000,()=>{
        console.log('Server is running at',3000)
    })
} 

server()