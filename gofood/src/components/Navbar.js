import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/"> Go Food</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {
                (localStorage.getItem("authToken")) 
                ? <li className="nav-item"> 
                    <Link className=" nav-link active fs-5" to="">My Orders</Link>
                  </li>
                : ''
              }
            </ul>
            {
                (!localStorage.getItem("authToken")) 
                ? <div className='d-flex'>
                    <Link className="btn btn-primary mx-1 " to="/login">Login</Link>
                  </div>
                : 
                  <div className='d-flex'>
                    <Link className=" btn btn-warning mx-1" to="/cart">Cart</Link>
                    <button className="btn btn-primary mx-1 " onClick={handleLogout}>Logout</button>
                  </div>
              }
          </div>
        </div>
      </nav>  
    </>
  )
}
