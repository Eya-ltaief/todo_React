// importing the add, delete,edit, done and set filter from the constatnts folder
import { ADD_TASK, DELETE_TASK, EDIT_TASK,DONE_TASK , SET_FILTER} from "../constants/actionsType";
// creating the add task action
export const addTask =(newtask)=>{
    return {
        type : ADD_TASK,
        payload:newtask
    };
};
// creating the delete task action
export const deleteTask =(id)=>{
    return{
        type: DELETE_TASK,
        payload:id
    };
};
// creating the edit task action
export const editTask =(id,newTask)=>{
    return {
        type : EDIT_TASK,
        payload: {id,newTask}
    };
};
// creating the done task action
export const doneTask = (id)=>{
    return {
        type : DONE_TASK,
        payload: id
    };
};
// creating the filter action
export const setFilter = filter =>
({ type: SET_FILTER, payload: { filter } });