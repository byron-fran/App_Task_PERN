import React from 'react'
import axios from 'axios';
import Task from '../interfaces';
const ListTasks = ({tasks,task, setTask, update,setTasks}) => {
    const deleleTask = async (id : number) => {
        try{
            await axios.delete(`http://localhost:3001/task/${id}`);
            const {data} = await axios('http://localhost:3001/tasks');
            setTasks(data)
            console.log('delete success');
            return data
        }
        catch(error){
            console.log(error)
        }
       
    }
     const handleDelete = async (id : number) => {
        await deleleTask(id)
    };
    const getTask = async(id: number) => {
        try{
            const {data} = await axios(`http://localhost:3001/task/${id}`);
            setTask(data[0])
            return data
        }
        catch(error){
            console.log(error);
            
        }
    }
    const handleUpdate = async  (id : number) => {
        await getTask(id);

    }
  return (
    <div>
        {tasks && tasks.map((task : Task) => (
            <div key={task.id}>
                <p>{task.name}</p>
                <p>{task.description}</p>
                <p>{task.done ? true : false}</p>
                <div className='grid grid-cols-2 gap-2'>
                    <button className='bg-red-500' onClick={() => handleDelete(task.id)}>Delete</button>
                    <button className='bg-indigo-600' onClick={() => {
                        handleUpdate(task.id)
                        update(task.id)}}>Update</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ListTasks