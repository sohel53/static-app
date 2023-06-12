import React, {useState} from "react";

const Form2 = () => {
    let [errorName, setErrorName] = useState("");
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");


    function formSubmit(event) {
        event.preventDefault();

        if(name.trim() === "") {
            setErrorName("Please enter a name");
            return;
        }

        if(!name.trim().includes(" ")){
            setErrorName("Please enter full name");
            return;
        }

    }

    function rest(){
        setName("");
        setEmail("");
        setPassword("");
    }

  

    return (
        <div>
            <form>
                <input type="text" 
                placeholder="Enter your name"
                onChange={(event) => setName(event.target.value)} 
                value={name}/>&nbsp;&nbsp;

                <input type="text" 
                placeholder="Enter your email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}/>&nbsp;&nbsp;

                <input type="text" 
                placeholder="Enter Password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}/>&nbsp;&nbsp;

                <button type="submit" onClick={formSubmit}>Submit</button>&nbsp;&nbsp;
                <button type="button" onClick={rest}>Rest</button>

                <p>Name:{name}</p>
                <p>Email:{email}</p>
            </form>
            {
                errorName &&
                <p>{errorName}</p>
            }
        </div>
    )
}

export default Form2;
