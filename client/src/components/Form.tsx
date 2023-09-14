import axios from 'axios';
import { useState } from 'react';
import Task from '../interfaces';


const Form = ({task, setTask, taskFound,handleAdd,errors, setErrors,isUpdate}) => {



    const handleSubmit = async (e) => {

    }
  return (
    <div>
        <form onSubmit={handleAdd} method='post' >
            <div>
                {errors && (<p>{errors.name}</p>)}
                <label htmlFor="nombre" className='block'>Task Name</label>
                <input value={task.name} type="text" placeholder='nombre' 
                className='w-4/5 mx-auto text-gray-800'
                onChange={(e) => setTask({...task, name : e.target.value})}/>
            </div>
            <div>
            {errors && (<p>{errors.description}</p>)}
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" value={task.description}
                className='h-32 max-h-32 w-4/5 min-h-32 text-gray-800'
                onChange={(e) => setTask({...task, description : e.target.value})}></textarea>
            </div>

             <button type='submit' className='bg-blue-700 w-full'>{isUpdate? 'Update' : 'Add'}</button>
        </form>
    </div>
  )
}

export default Form