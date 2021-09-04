import React from "react";


import Button from "./Button";
import "./AddTask.css";

const AddTask = () => {
    return(
        <div className="add-task-container">
            <input className="add-task-input" type="text" />
            <Button className="">Adicionar</Button>
        </div>
    );   
}
 
export default AddTask;