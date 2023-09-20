import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Signup() {
    return (
        <>  
            <div><Navbar/></div>
            <div className="container">
                <form>
                    <div className="form-group m-3">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
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
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary m-3">Submit</button>
                    <Link to="/login" className="m-3"> Already a user</Link>
                </form>
            </div>
        </>
    )
}