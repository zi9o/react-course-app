import { useState } from "react";

function Todo(props) {

    useState();
    
    function deleteHandler(params) {
        
    }
  return (<div>
    <h2>{props.text}<span className="badge badge-primary">New</span></h2>
    <button className="btn btn-primary btn-lg btn-block" onClick={deleteHandler}>Delete</button>
  </div>);
}

export default Todo;
