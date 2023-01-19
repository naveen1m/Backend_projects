// importing model
import studentModel from "../models/student.js";

class studentController {
  static createDoc = async (req, res) => {
    try {
        // const doc = new studentModel(req.body)
        const {name, age, fees} = req.body
        const doc = new studentModel({
            name:name,
            age:age,
            fees:fees
        })
        const result = await doc.save();
        res.status(201).send(result)
    } catch (error) {
        
    }
  };
  static getAllDoc = async (req, res) => {
    try {
      const result = await studentModel.find();
      console.log(result);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  };
  static getSingleDocById = async(req, res) => {
    try {
        const result = await studentModel.findById(req.params.id);
        console.log(result);
        res.send(result)
    } catch (error) {
        console.log(error);
    }
  };
  static updateDocById = async (req, res) => {
    try {
        const result = await studentModel.findByIdAndUpdate(req.params.id,req.body)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
  };
  static deleteDocById = async (req, res) => {
    try {
        const result = await studentModel.deleteOne(req.params.name)
        res.status(204).send(result)
    } catch (error) {
        console.log(error)
    }
  };
}
export default studentController;
