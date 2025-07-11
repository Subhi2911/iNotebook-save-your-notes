import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'

const Login = (props) => {
    const host = process.env.REACT_APP_BACKEND_URL
    let navigate = useNavigate();
    const [credentials, setCredentials]=useState({email: "", password: ""})

    const onChange=(e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        //fetch("http://localhost:5000/api/auth/login")
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: credentials.email,password: credentials.password }),
        });
        const json = await response.json();
        
        if(json.success){
            //save the token and resirect
            localStorage.setItem('token', json.authToken);
            props.showAlert("Logged in Successfully!! ","success" )
            navigate('/');
            
        }
        else{
            props.showAlert(json.error,"danger" )
        }   
    }
    return (
        <div style={{marginTop:'0.8rem'}}>
            <h2>Login to continue to iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} id="email" name='email' aria-describedby="emailHelp" onChange={onChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} name='password' id="password" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
            <div className='d-flex my-3 mx-4'>
          <p className='my-2'>Create New Account</p>
          <Link className="btn btn-outline-primary mx-2" to="/signup">Sign Up</Link>
        </div>
        </div>
    )
}

export default Login
