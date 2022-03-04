import express,{Express} from 'express'
import expressApp from './express'



const server = async()=>{
    const app:Express = express()
    
    await expressApp(app)

    app.listen(3000,()=>{
        console.log('Server is running at',3000)
    })
}

server()