import express from 'express';
import path from 'path'
import connect_db from './db/connectDB.js';
import router from './routes/tasks.js';
import('./db/connectDB.js')

const app = express();
const port = process.env.PORT || ('3000');
// const URI = "mongodb+srv://naveen:progressing@nodejsapi.xpgxw4l.mongodb.net/?retryWrites=true&w=majority"
const URI = "mongodb+srv://naveen:progressing@nodejsapi.xpgxw4l.mongodb.net"

// connection to database
connect_db(URI);
app.use(express.urlencoded({extended:false}))
// built in middleware
app.use(express.json())





// routes
app.use('/api/v1/tasks',router);
app.get('/',(req,res)=>{
    res.send("hello welcome to learning projects")
})



app.listen(port, ()=>{
    console.log(`app running at http://localhost:${port}`);
})