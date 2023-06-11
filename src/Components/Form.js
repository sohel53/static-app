import React, {useState} from "react";

const Form = () =>{
    let [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    return <div>
        <input type="text" placeholder="Enter name"
        onChange={handleChange} />
        <p>Input Name: {name}</p>
    </div>
}

export default Form;