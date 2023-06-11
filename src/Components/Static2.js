import React, {useState} from "react";

const Static2 = () => {
    let [count, setCount] = useState({gold:0, silver:0, bronze:0})

    function increaseGold() {
        // setCount({gold:count.gold + 1, silver:0, bronze:0})
        setCount({...count, gold:count.gold + 1})
    }

    function reset(){
        setCount({gold:0, silver:0, bronze:0});
    }


    return (
        <div>
            <h1>Gold: {count.gold}, Silver: {count.silver}, Bronze: {count.bronze}</h1>
            <button onClick={increaseGold}>Gold</button>
            <button onClick={()=>setCount({...count, silver:count.silver+1})}>Silver</button>
            <button onClick={()=> setCount({...count, bronze: count.bronze+1})}>Bronze</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Static2;
