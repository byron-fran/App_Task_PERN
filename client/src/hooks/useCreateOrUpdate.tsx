import Task from '../interfaces'
import axios from 'axios'

const useCreateOrUpdate = (task : Task, setRefreshData : Function, setTask: Function) => {
    const postTask = async (task : Task) => {
        try{
            setRefreshData(!true)
            const {data} = await axios.post('http://localhost:3001/task', task);
            //console.log(data)
            setTask({
              ...task,
              name : '',
              description : '',
              done : false,
              id : ''
            })
            setRefreshData(!false)
            return data
        }
        catch(error){
            console.log(error)
        }
        
      }
      const updateTask = async ( taskUpdate  : Task) => {
        try{
          setRefreshData(!true)
          const {data} = await axios.put(`http://localhost:3001/task/${taskUpdate.id}`, taskUpdate);
          setRefreshData(!false);
          setTask({
            ...task,
            name : '',
            description : '',
            done : false,
            id : ''
          })
          return data
      
        }
        catch(error){
          console.log(error)
        }
      } 
  return {
    updateTask,
    postTask,
  
  }
}

export default useCreateOrUpdate