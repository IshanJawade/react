import { 
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Cart from "./screens/Cart";


function App() {
  return (
    <> 
      <Router>
        <Routes>
          <Route exact path="/" element= {<Home /> } />
          <Route exact path="/login" element= {<Login /> } />
          <Route exact path="/signup" element= {<Signup />} />
          <Route exact path="/cart" element= {<Cart />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;
