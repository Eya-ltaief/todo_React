// importing react and useState
import React, {useState} from 'react'
// importing useDispatch from react-redux
import { useDispatch } from "react-redux";
//importing the addTask action from redux/actions
import { addTask } from "../Redux/actions/actions";
import { Button } from "react-bootstrap";

const AddTask = () => {
    // adding task state
    const [task, settask] = useState();
    // importing dispatch for the action
    const dispatch = useDispatch()
    // handle add function
    const handleadd = () => {
            if (task) {
            dispatch(addTask({id: Math.random(), task:task, isDone: false}));
            settask("") 
            }
            else {
                alert('alert you have entered an empty todo')
            }

    }
    // returning the added tasks
    return (
        <div className ="tasks">
            <h3 >Todo List</h3>
            <input placeholder="write a task ..." onChange ={(e)=> settask(e.target.value)} value={task} class="user-box"></input>
            <Button variant="outline-dark" onClick={handleadd}>Add </Button>
        </div>
    )
}

export default AddTask;
