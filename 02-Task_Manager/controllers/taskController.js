


const getAllTasks = (req,res)=>{
    res.send("all times")
}
const createTask = (req,res)=>{
    // res.send("create a new task")
    res.json(req.body);
}
const getTask = (req,res)=>{
    // res.send("get single task")
    res.json({id:req.params.id})
}
const updateTask = (req,res)=>{
    res.send('update the task')
}
const deleteTask = (req,res)=>{
    res.send('delete task added')
    // res.json({id:req.params.id})
}

export {getAllTasks, createTask, getTask, updateTask, deleteTask}