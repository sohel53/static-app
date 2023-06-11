import React, {useState} from "react";
import { FaPlus, FaMinus, FaSync } from "react-icons/fa";

const Counter = () =>{
    let [count, setCount] = useState(0);

    return <div className="counter">
        <h1>Counter Application</h1>&nbsp;&nbsp;
        <h1>Total = {count}</h1>
        <button id="btn" onClick={() => setCount(count+1)}>
            <FaPlus />
        </button>&nbsp;&nbsp;
        <button id="btn" onClick={() => setCount(count-1)}>
            <FaMinus />
        </button>&nbsp;&nbsp;
        <button id="btn" onClick={() => setCount(0)}>
            <FaSync />
        </button>
    </div>
}

export default Counter;