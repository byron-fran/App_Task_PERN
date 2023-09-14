import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import ListTasks from './components/ListTasks'
import Task from './interfaces'
function App() {
  const [task, setTask] = useState({
    name : '',
    description : '',
    done : false
});
const [isUpdate, setIsUpdate] = useState(false)
const [errors, setErrors] = useState({
  name : '',
  description : ''
});

const postTask = async (task : Task) => {
  try{
      await axios.post('http://localhost:3001/task', task);
      const {data} = await axios('http://localhost:3001/tasks');
      setTasks(data)
      console.log('send success')
      return data
  }
  catch(error){
      console.log(error)
  }
  
}
const [ taskFound, setTaskFound] = useState()
   const [tasks, setTasks] = useState([])
  const getTasks = async () => {
    const {data} = await axios('http://localhost:3001/tasks');
    setTasks(data)

  };
  useEffect(() => {
    getTasks();
  },[])
  const updateTask = async (id : number) => {
    try{
      await axios.put(`http://localhost:3001/task/${id}`, task);
      const {data} = await axios('http://localhost:3001/tasks');
      setTasks(data)
      console.log('update success')
      return 
    }
    catch(error){
      console.log(error)
    }
  }
  const handleAdd = async (e) => {
    setIsUpdate(false)
    e.preventDefault();
    if(task.name === '' &&task.description === ''){
        setErrors({
            ...errors,
            name : 'name must no have empty',
            description : 'description must no have empty'
        })
        return
    }
    setErrors({
        ...errors,
        name : '',
        description : ''
    });
    setTask({
        ...task,
        name : '',
        description : ''
    });
    if(taskFound){
       
        await updateTask(taskFound.id, task);
       
        return
    }
    postTask(task);
   
  }
 const update = ( id : number)=> {
  const tasFound = tasks.find( task => task.id === id);
  
  if(tasFound){
    setTaskFound(tasFound);
    setIsUpdate(true)
    return
  }
  setIsUpdate(false)
 }

  return (
    <div className='bg-gray-800 p-10 text-white' >
      <Form task={task} setTask={setTask}  taskFound={taskFound} handleAdd={ handleAdd} errors={errors} setErrors={setErrors} isUpdate={isUpdate}/>
      <ListTasks tasks={tasks} task={task} setTask={setTask}  update={update}setTasks={setTasks}/>
    </div>
  )
}

export default App
