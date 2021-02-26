//importing the actions type
import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../constants/actionsType";
// initializing the state
const initialState ={
    listTask : [
        {id : Math.random(), task : "Take a shower", isDone : false },
        {id : Math.random(), task :"Read a book", isDone : false},
    ],
};
// exporting the task reducer
export const taskReducer = (state =initialState, action)=>{
    switch(action.type){
        case ADD_TASK :
            return {...state, listTask : state.listTask.concat(action.payload)};
        case DELETE_TASK:
            return {...state, listTask : state.listTask.filter((el) => el.id!==action.payload)}
        case DONE_TASK :
            return {...state, listTask : state.listTask.map((el)=>el.id == action.payload? {...el, isDone:!el.isDone} :el),} 
        case EDIT_TASK :
            return  {...state,listTask: state.listTask.map((el) => el.id === action.payload.id? { ...el, task: action.payload.newTask, isDone: false }: el),
        }
            default :
            return state;
    }
}