import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ProfileStatusHook = (props) => {

    const [editMode,setEditMode ] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)}, [props.status]
    )

    let activeStatusChange = () => {
        setEditMode(true);       
    }
    const deActivateStatusChange = () => {
        setEditMode(false);
        props.updateStatus(status);  
    }
    const onStatusChange = (e) => {
       setStatus(e.currentTarget.value)
    }

    

  return (
    <div>
        { !editMode &&
            <div>
                {<span onClick={activeStatusChange}> {props.status || "Set your status"} </span>}
            </div>
        }
        { editMode &&
            <div>{<input onChange={onStatusChange} autoFocus={true} onBlur={deActivateStatusChange} value={status} />}</div>
        }
 
    </div>
  );
};

export default ProfileStatusHook;
