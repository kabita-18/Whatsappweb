import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



const Connection = async() =>{
    const URL =`mongodb://${USERNAME}:${PASSWORD}@ac-n2stfhz-shard-00-00.bwv9lch.mongodb.net:27017,ac-n2stfhz-shard-00-01.bwv9lch.mongodb.net:27017,ac-n2stfhz-shard-00-02.bwv9lch.mongodb.net:27017/?ssl=true&replicaSet=atlas-9nyowy-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true})
        console.log('database connected successfully');

    }
    catch(error){
        console.log('Error while connecting with database:', error.message)
    }
}

export default Connection;