// importing react and useState from react
import React,{useState} from "react";
// importing modal and button from react-bootstrap
import { Modal, Button} from "react-bootstrap";
// importing the edit task action
import { editTask } from "../Redux/actions/actions";
// importing the useDispatch
import{useDispatch} from 'react-redux'


const EditItems = ({el}) => {
  // setting the state of the input to edit 
  const [edit, setEdit] = useState(el.task)
   // importing dispatch for the action
  const dispatch = useDispatch();
  // setting the handle close for the modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // returning the modal
  return (
    <>
      {/* the edit button   */}
      <Button variant="outline-primary" onClick={handleShow}>edit</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* setting the input    */}
          <input placeholder="text" onChange ={(e)=> setEdit(e.target.value)} value={edit}></input></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { dispatch(editTask(el.id,edit))}}>
            submit
          </Button>
        
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default EditItems;
