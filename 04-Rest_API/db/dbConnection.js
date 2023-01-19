import mongoose from "mongoose";

const connectDB = async (URI)=>{
    try {
        const DB_OPTIONS = {
            dbName : 'school',
            useNewUrlParser: true
        }
        
        await mongoose.connect(URI, DB_OPTIONS)
        console.log("database connected successfully...")

    } catch (error) {
        console.log("db error: ", error)
    }
}
export default connectDB