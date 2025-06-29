import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    let navigate = useNavigate();
        const [credentials, setCredentials]=useState({name: "", email: "", password: "", cpassword:"" })

    const onChange=(e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        //const {name , email ,password , } = credentials
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name:credentials.name, email: credentials.email,password: credentials.password }),
        });
        const json = await response.json();
        console.log(json)
        if(json.success){
            //save the token and resirect
            localStorage.setItem('token', json.authtoken);
            navigate('/');
        }
        else{
            alert(json.error)
        }   
    }

    return (
        <div className='container' >
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Username</label>
                    <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onChange} aria-describedby="name" minLength={5} required/>
                </div>  
                <div className="mb-3"> 
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" minLength={5} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="password" minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='cpassword' value={credentials.cPassword} onChange={onChange} id="cPassword" minLength={5} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
