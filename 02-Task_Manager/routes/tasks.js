import express from "express";
const router = express.Router();

import { getAllTasks, createTask, getTask, updateTask, deleteTask } from '../controllers/taskController.js';

// app.get('/api/v1/tasks')  // get all the tasks
// app.post('/api/v1/tasks') // create a new task
// app.get('/api/v1/tasks/:id')  // get a single task
// app.patch('/api/v1/tasks/:id')  // update task
// app.delete('/api/v1/tasks/:id')  // delete task

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


export default router;