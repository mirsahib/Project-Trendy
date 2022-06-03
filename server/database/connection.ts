import { MongoClient } from "mongodb";
import { Client } from "pg"

// const connection = async () => {
//     try {
//        const mongo = await MongoClient.connect('mongodb://localhost:27017') 
//        if(mongo){
//             console.log('Database connected')
//        }
//     } catch (error) {
//         console.log(error)
//     }
// }

const connection = async () => {
    try {
        const client = new Client({
            user: 'root',
            host: 'postgres',
            database: 'root',
            password: 'root',
            port: 5432,
        })
        await client.connect()
        console.log('Database Connected')
    } catch (error) {
        console.log('Database Connection failed ',error)
    }
}


export default connection