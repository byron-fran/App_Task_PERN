import Task from "."
import { ErorrMessage } from "./Errors"

export  interface FormProps {
    handleSubmit : (event : React.FormEvent<HTMLFormElement>) => void,
    task : Task,
    setTask : Function,
    errors : ErorrMessage,
    isUpdate : Boolean,
    setErrors? : (errors : ErorrMessage) => void
}