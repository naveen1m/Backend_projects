import mongoose from "mongoose";

const connect_db = async (uri)=>{
    try{
        const DB_OPTIONS = {
            dbName : "school",
            
        }
        await mongoose.connect(uri, DB_OPTIONS)
        console.log('database connected successfully....');
    }catch(err){
        console.log(err);
    }
}
export default connect_db