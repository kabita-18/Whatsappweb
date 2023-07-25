import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import Connection from './database/db.js';
import Route from './routes/route.js';
// Iniatiaze Express as a function
const app  = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.json());


app.use('/', Route)

;

// create server
const PORT = 8000;
Connection().then(()=>{
    app.listen(PORT, ()=>console.log(`Server is running successfully on PORT ${PORT}`))
}).catch((error)=> console.log(error))