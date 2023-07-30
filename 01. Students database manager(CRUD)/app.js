import express from 'express'
import connect_db from './db/connectDB.js';
import {join} from 'path'
import web from './routes/web.js'

const app = express();
const port = process.env.PORT || '3000'
const uri = "mongodb+srv://navstr10:root@cluster0.xarnsjf.mongodb.net"

// connecting to database
connect_db(uri)

app.use(express.urlencoded({extended:false}))

// static files
app.use(express.static(join(process.cwd(),'public')))
// app.use('/student/edit/:id',express.static(join(process.cwd(),'public')))
// Set Template Engine
app.set("view engine", "ejs")

// load rutes
app.use('/student', web)


app.listen(port, ()=>console.log(`server running at http://localhost:${port}`))