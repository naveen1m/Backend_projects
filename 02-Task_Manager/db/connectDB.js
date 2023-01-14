import mongoose from 'mongoose'

mongoose.set('strictQuery', true);
const connect_db = async (uri)=>{
    try {
        const DB_OPTIONS = {
            dbName : "02-Task_Manager"
        }
        await mongoose.connect(uri, DB_OPTIONS)
        console.log('database connected successfully...')
    } catch (error) {
        console.log(error);
        
    }
}

export default connect_db;

















// const connectionString = "mongodb+srv://naveen:progressing@nodejsapi.xpgxw4l.mongodb.net/02-Task_Manager?retryWrites=true&w=majority"

// mongoose.set('strictQuery', true);
// // mongoose.connect(connectionString, ()=>{
// //     console.log("database connected successfully");
// // })

// mongoose
//     .connect(connectionString, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(()=>console.log('Connected to the DB...'))
//     .catch(error =>console.log(error))