import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



const storage = new GridFsStorage({
    url:`mongodb://${USERNAME}:${PASSWORD}@ac-n2stfhz-shard-00-00.bwv9lch.mongodb.net:27017,ac-n2stfhz-shard-00-01.bwv9lch.mongodb.net:27017,ac-n2stfhz-shard-00-02.bwv9lch.mongodb.net:27017/?ssl=true&replicaSet=atlas-9nyowy-shard-0&authSource=admin&retryWrites=true&w=majority`,
    option: { useUnifiedTopology: true, useNewUrlParser: true},
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.mimeType) === -1){
            return `${Date.now()}-file-${file.originalname}`;
        }
        //console.log("sdsd")
        return {
            bucketname:"photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }

});

export default multer ({storage})