function App(){
    let message = "Hi There!";
  
    if(Math.random() < 0.5){
      message = "Bye There!"
    }
  
    const date = new Date();
    const time = date.toLocaleTimeString();
  
    return (
      <h1>{ message }  Time is { time } </h1>
    );
  }

export default App;