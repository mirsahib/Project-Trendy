import { MongoClient } from "mongodb";

const connection = async () => {
    try {
       const mongo = await MongoClient.connect('mongodb://localhost:27017') 
       if(mongo){
            console.log('Database connected',mongo)
       }
    } catch (error) {
        console.log(error)
    }
}

export default connection