import express from 'express';
import Connection from './database/db.js';
import Route from './routes/route.js';
import cors from 'cors';
import bodyParcer from 'body-parser'
// Iniatiaze Express as a function
const app  = express();

app.use(cors());

app.use(bodyParcer.json({extended:true}));
app.use(bodyParcer.urlencoded({extended:true}))
app.use('/', Route)

Connection();

// create server
const PORT = 8000;

app.listen(PORT, ()=>console.log(`Server is running successfully on PORT ${PORT}`))