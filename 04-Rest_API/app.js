import express from 'express'
import connectDB from './db/dbConnection.js';
import router from './routes/web.js'
const app = express();

const port = process.env.PORT || '3000'
const database_URL = process.env.database_URL || "mongodb://localhost:27017";

// Database connection
connectDB(database_URL);
// JSON middleware
app.use(express.json())
// Load router
app.use('/student', router);



app.listen(port, ()=> console.log(`app running at http://localhost:${port}`))
