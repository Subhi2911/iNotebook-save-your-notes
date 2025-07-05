import React ,{useState} from 'react';
import { Link,  useNavigate } from 'react-router-dom';


const Signup = (props) => {
    const host = process.env.REACT_APP_BACKEND_URL
    
    let navigate = useNavigate();
        const [credentials, setCredentials]=useState({name: "", email: "", password: "", cpassword:"" })

    const onChange=(e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
  e.preventDefault();

  if (credentials.password !== credentials.cpassword) {
    props.showAlert("Passwords do not match", "danger");
    return;
  }

  try {
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });

    let json = {};
    const text = await response.text(); // first get raw text
    try {
      json = JSON.parse(text); // try to parse JSON
    } catch (err) {
      console.warn("Could not parse JSON:", text);
    }

    if (response.ok && json.success) {
      localStorage.setItem("token", json.authToken); 
      console.log(localStorage.getItem("token"))

      navigate("/");
      props.showAlert("Account Created Successfully!", "success");
    } else {
      props.showAlert(json.error || "Signup failed", "danger");
    }
  } catch (err) {
    console.error("Network error:", err);
    props.showAlert("Network error. Please try again later.", "danger");
  }
};
    

    return (
      <>
        <div className='container' style={{marginTop:'0rem', justifyContent:'center'}} >
            <h2 style={{marginBottom:'1rem',color:'#0B1D51'}}>Create An Account To Continue</h2>
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
                    <div id="passwordHelpBlock" className="form-text">
                      Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='cpassword' value={credentials.cpassword} onChange={onChange} id="cPassword" minLength={5} required/>
                </div>
                <button type="submit" className="btn btn-primary my-2">Submit</button>

            </form>

        </div>
        <div className='d-flex my-3 mx-4'>
          <p className='my-2'>Already Have an Account?</p>
          <Link className="btn btn-outline-primary mx-2" to="/login">Log in</Link>
        </div>
      </>
    )
}

export default Signup
