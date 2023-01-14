import StudentModel from "../models/Student.js"
class StudentController {
    
    // ---------------------- 1.C_create Document ----------------------
    static createDoc = async (req,res)=>{
        // console.log('create post method');
        // console.log(req.body);
        try{
        const {name, age, fees} = req.body;
        const doc = new StudentModel({
            name:name,
            age:age,
            fees:fees
        })    
        //saving document
        const result = await doc.save()
        // console.log('post :- ', result);
        res.redirect('/student')
        }catch(err){
            console.log(err);
        }
    }

    // ---------------------- 2.R_retrieve all document ----------------------
    static getAllDoc = async (req,res)=>{
        try{
            const result = await StudentModel.find()
            res.render('index.ejs', {data: result})
        }catch(err){
            console.log(err);
        }
    }

// ---------------------- EDIT Document ----------------------
    static editDoc = async (req,res)=>{
        // console.log(req.params.id);
        try{
            const result = await StudentModel.findById(req.params.id);
            // console.log(result);
            res.render('edit.ejs', {data: result})
        }catch(err){
            console.log(err);
        }
    }

    // ---------------------- 3.U_update document ----------------------
    static updateDocById = async (req,res)=>{
        // console.log(req.params.id);
        // console.log(req.body)
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
        } catch (error) {
            console.log(error)
        }
        res.redirect('/student')
    }

    // ---------------------- 4.D_delete Document ----------------------
    static deleteDocById = async (req,res)=>{
        // console.log(req.params.id)
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            // console.log(result)
        } catch (error) {
            console.log(error)
        }
        res.redirect('/student')
    }
}
export default StudentController