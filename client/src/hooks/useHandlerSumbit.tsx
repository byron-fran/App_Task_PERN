import Task from "../interfaces"

const useHandlerSumbit = (
    task : Task, 
    setErrors : Function, 
    postTask : Function, 
    updateTask : Function, 
    errors : Object,
    setIsUpdate : Function,
    setTask : Function,
    tasks : Task[]
    ) => {
    const handleSubmit = async (e : any) => {
            e.preventDefault();
            if(task.name === '' && task.description === ''){
              setErrors({
                  ...errors,
                  name : 'name must no have empty',
                  description : 'description must no have empty'
              })
              return
            };
            const taskExist = tasks.find((_task : Task) => _task.id === task.id);
            if(taskExist){
              setIsUpdate(true)
              await updateTask(task);
              return
            }
            await postTask(task);
            setIsUpdate(false)
            setTask({
              ...task,
              name : '',
              description : '',
              done : false,
              id : ''
            })
          
          }
  return {
    handleSubmit
  }
}

export default useHandlerSumbit