
import axios from 'axios';


const useDeleteTask = ( setRefreshData : Function) => {
    const deleteTask = async (id :string)  => {
        try{
            setRefreshData(!true)
           const {data} = await axios.delete(`http://localhost:3001/task/${id}`);
            setRefreshData(!false)
            return data
        }
        catch(error){
            console.log(error)
        }
       
    }
  return {
    deleteTask
  }
}

export default useDeleteTask