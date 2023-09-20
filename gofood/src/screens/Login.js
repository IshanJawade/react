import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
        <div> <Navbar/> </div>
        <div className="container">
          <form>
              <div className="form-group m-3">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group m-3">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group form-check m-3">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">Remember me</label>
              </div>
              <button type="submit" className="btn btn-primary m-3">Submit</button>
              <Link to="/signup" className="m-3"> New User</Link>
          </form>
        </div>
    </>
  )
}
