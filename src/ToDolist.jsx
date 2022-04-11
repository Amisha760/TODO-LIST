import React from "react"
import logo from "./images/delete.png"
const ToDolist=(props)=>{
 
    return (
        <div className="ToDoStyle">

  <li className="text">
        {props.text}
        </li>
        <button className="deletebtn" 
        onClick={()=>{
            props.onSelect(props.id);
        }}
        ><img src={logo} alt="logo" /></button>
      
     
        </div>
    );
};
export default ToDolist;