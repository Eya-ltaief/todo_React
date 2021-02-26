// importing react and useState from react
import React, { useState } from 'react'
// importing useSelector and useDispatch from react-redux
import { useSelector, useDispatch} from 'react-redux';
// importing button from react-bootstrap
import { Button } from "react-bootstrap";
//importing the task component
import Task from "./Task";

const ListTask = () => {
    const list = useSelector(state => state.taskReducer.listTask)
    const [status, setstatus] = useState("all");
    return (
        <div className ="list-task">
            {/*setting the buttons */ }
            <Button variant="outline-secondary" onClick={() => setstatus("all")}>All</Button>
            <Button variant="outline-success" onClick={() => setstatus("done")}>Done</Button>
            <Button variant="outline-danger" onClick={() => setstatus("undone")}>Undone</Button>
            {/* showing the list according to the conditions*/}
                {status === "done"
                    ? list
                        .filter((el) => el.isDone === true)
                        .map((el) => <Task el={el} key={el.id} />)
                    : status === "undone"
                    ? list
                        .filter((el) => el.isDone === false)
                        .map((el) => <Task el={el} key={el.id} />)
                    : list.map((el) => <Task el={el} key={el.id} />)}
                                
        </div>                 
    )
}

export default ListTask
