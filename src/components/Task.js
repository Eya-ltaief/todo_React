// importing react and useState from react
import React from "react";
// importing  useDispatch from react
import { useDispatch } from "react-redux";
// importing the deletetask and the donetask actions from redux/actions
import { deleteTask, doneTask } from "../Redux/actions/actions";
// importing edit from react
import Edit from "./EditTodo";
// importing button from react-bootstrap
import { Button } from "react-bootstrap";

const Task = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="task-edits">
        <span style={{textDecoration: el.isDone ?"line-through" : "none"}}>{el.task}</span>
        <Edit el={el} />
        <Button
          variant="outline-primary"
          onClick={() => dispatch(deleteTask(el.id))}>
          <img src="/delete.png" alt="delete icone" width="40%" style={{ position:"relative", alignItems:"center"}}></img>
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => dispatch(doneTask(el.id))}>
          {el.isDone ? <img src="/check.png" alt="check icone" width="40%"/>:<img src="/unchecked.png" alt="check icone" width="40%"/>}
        </Button>
      </div>
    </div>
  );
};

export default Task;
