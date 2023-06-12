import React, { useState } from "react"

const State3 =() => {
    let [favorite, setFavorite] = useState(["mango", "apple", "watermelon", "cake"]);
    let [newFruit, setNewFruit] = useState("");


    function addFruit(event) {
        event.preventDefault();
        let arr = [...favorite];

        arr.unshift(newFruit);
        setFavorite(arr);
    }

    return (
        <div>
            <input type= "text" 
            placeholder="Add favorite"  
            onChange={(event)=> setNewFruit(event.target.value)}
            value={newFruit}/>&nbsp;&nbsp;&nbsp;

            <button onClick={addFruit}>Add Fruit to favorite</button>

            <div>
                <p>Fruit Collection: {favorite.join(", ")} </p>
            </div>
        </div>
       
    )
}
export default State3;