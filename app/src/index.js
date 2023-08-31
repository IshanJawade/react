// Things we have to do to get things on screen

// 1) Import react and react-dom libraries
import React from "react";
import ReactDOM  from "react-dom/client";
import App from './App';
import Hello from './Hello';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell react to take control of the element
const root = ReactDOM.createRoot(el);

// 4) Ceate a component

// 5) Show component on screen
if (Math.random() > 0.5 ){
  root.render(<Hello/>);
}
else {
root.render(<App/>);
}