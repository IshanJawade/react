import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal(){
    const animal = ['cow','horse','gator','dog', 'bird'];
    return animal [Math.floor(Math.random()*animal.length)]
}


function App(){
    const [animal, setAnimal] = useState([]);
    
    const handleClick = () => {
        setAnimal ([...animal, getRandomAnimal()]);
    }
    return(
        <>
            <h1>Show animal's list</h1>
            <h2> <AnimalShow /> </h2>
            <button onClick = {handleClick}>Add Animal</button>
            <div>{animal}</div>
        </>
    );
}

export default App;