import { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import ListTasks from './components/ListTasks';
import useCreateOrUpdate from './hooks/useCreateOrUpdate';
import useHandlerSumbit from './hooks/useHandlerSumbit';
import { ErorrMessage } from './interfaces/Errors';
import Task from './interfaces'
function App() {

  const [isUpdate, setIsUpdate] = useState(false);
  const [refreshData, setRefreshData] = useState(false)
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState <Task> ({
    name: '',
    description: '',
    done: false,
    id: ''
  });
  const [errors, setErrors] = useState <ErorrMessage> ({
    name: '',
    description: ''
  });
  const { updateTask, postTask, } = useCreateOrUpdate(task, setRefreshData, setTask)
  const { handleSubmit } = useHandlerSumbit(task, setErrors, postTask, updateTask, errors, setIsUpdate, setTask, tasks);


  useEffect(() => {
    const getTasks = async () => {

      const { data } = await axios('http://localhost:3001/tasks');
      //console.log(data)
      setTasks(data)

    };
    getTasks();
  }, [refreshData]);


  return (
    <div className='bg-gray-800 p-10 text-white' >
      <Form
        task={task}
        setTask={setTask}

        handleSubmit={handleSubmit}
        errors={errors}
        setErrors={setErrors}
        isUpdate={isUpdate}

      />
      <ListTasks
        task={task}
        tasks={tasks}
        setTask={setTask}
        setTasks={setTasks}
        setRefreshData={setRefreshData}
        setIsUpdate={setIsUpdate} />
    </div>
  )
}

export default App
