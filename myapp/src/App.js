function App(){
    let message = 'Hello Boys!';
    if(Math.random()>0.5){
        message = 'Bye Boys!';
    }
    return(
        <>
            {message}
        </>
    );
}

export default App;