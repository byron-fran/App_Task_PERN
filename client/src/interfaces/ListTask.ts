import Task from ".";
export interface ListTask {
    tasks : Task[],
    setTask : (task : Task) => void,
    setRefreshData : (refreshData:Boolean) => void,
    setIsUpdate : (isUpdate : Boolean) => void
}