import AnimalShow from "./AnimalShow";

// let handleClick = function handleClick(){
//     console.log('Button was clicked');
// } 
// "Simple version is written direclty in the button tag"

function App(){
    return(
        <>
            <h1>Show animal's list</h1>
            <h2> <AnimalShow /> </h2>
            <button onClick = {
                () => console.log('Button was cliked')}>
                Add Animal
            </button>
        </>
    );
}

export default App;