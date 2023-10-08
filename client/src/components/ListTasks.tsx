import { ListTask } from '../interfaces/ListTask';
import Task from '../interfaces';
import useDeleteTask from '../hooks/useDeleteTask';

const ListTasks : React.FC<ListTask> = ({tasks, setTask, setRefreshData ,setIsUpdate}) => {

    const {deleteTask} = useDeleteTask(setRefreshData);

     const handleDelete = async (id : any) => {
        await deleteTask(id)
    };

    const handleUpdate =  (task : Task) => {
       setTask(task);
 
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
                        setIsUpdate(true)
                        handleUpdate(task)}}>Update</button>
                </div>
            </div> 
        ))}
    </div>
  )
}

export default ListTasks