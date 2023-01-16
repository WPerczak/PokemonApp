import React, { Fragment, useState } from "react";
import "./Form.css"

const Form = props => {

    const [name, setName] = useState("");
    const filter = (event) => {
      const keyword = event.target.value;
      setName(keyword);
      props.setFilter(keyword);
    };
    
    
    return (
        <div className="form">
            <input type="text" placeholder=" Search Pokemon"  value={name} onChange={filter}></input>
        </div>
    )
}

export default Form;