export const TaskSchema = {
    name: "Task",
    properties:{
        _id:'string',
        taskName:'string',
        date:'date',
        status:'int'
        
    },

    primaryKey:"_id"
    
    
}

export default TaskSchema