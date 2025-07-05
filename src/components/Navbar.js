import React ,{useEffect, useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Avatar from './Avatar'; 



export default function Navbar(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const host = process.env.REACT_APP_BACKEND_URL
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
    const [user, setUser] = useState(null);

    useEffect(() => { 
    const fetchUser = async () => {
        try {
            const response = await fetch(`${host}/api/auth/getuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
            });
            const json = await response.json();
            setUser(json);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };
    const token=localStorage.getItem("token");
    if (token) {
        fetchUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);


    const myStyle = {
        backgroundColor: props.theme === 'light' ? 'white' : 'black',
        color: props.color,
    };

    const offCanvasStyle = {
        backgroundColor: props.theme === 'light' ? 'white' : '#DBDBDB',
        color: 'black',
    };

    return (
        <>
            <nav className="navbar fixed-top w-100 px-3" style={myStyle}>
                <div className="d-flex justify-content-between align-items-center w-100">
                    {/* Left Side: Logo + Links */}
                    <div className="d-flex align-items-center">
                        <h5 className="me-3 mb-0" style={{ color: props.color }}>NoteXpress</h5>
                        <ul className="navbar-nav d-flex flex-row mb-0">
                            <li className="nav-item mx-1">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/" style={{ color: props.color }}>Home</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" style={{ color: props.color }}>About</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side: Login/Signup or User Icon */}
                    <div>
                        {!token || token === 'undefined' || token === 'null' ? (
                            <div></div>
                        ) : (
                            // <i
                            //     className="fa-solid fa-circle-user fa-2xl"
                            //     style={{ cursor: "pointer", color: props.color }}
                            //     data-bs-toggle="offcanvas"
                            //     data-bs-target="#userOffcanvas"
                            //     aria-controls="userOffcanvas"
                            // ></i>
                            <div style={{ cursor: "pointer", color: props.color }}
                             data-bs-toggle="offcanvas"
                            data-bs-target="#userOffcanvas"
                            aria-controls="userOffcanvas">
                                <Avatar width='2' height='2' size='16' name={user.name} theme={props.theme} />
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Offcanvas for User */}
            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="userOffcanvas"
                aria-labelledby="userOffcanvasLabel"
                style={offCanvasStyle}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="userOffcanvasLabel">Your Account</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body ">
                    {user&&<div className='container'>
                        <div className='d-flex justify-content-center' >
                            <div className='profile-image d-flex justify-content-center' style={{width:'11rem',height:'11rem', backgroundColor:'pink', borderRadius:'50%' }}>
                            <Avatar name={user.name} theme={props.theme} size={40} />
                            </div>
                            
                        </div>
                        
                        <p className="fw-semibold my-3" style={{marginLeft:'5rem'}}>{user.email}</p>
                        <p className="text-muted small" style={{marginLeft:'2rem'}}>User ID: {user._id}</p>
                    </div>}
                    <ul className="list-group">
                        <li className="list-group-item" style={offCanvasStyle}>
                            <Link to="/profile" className="text-decoration-none" style={{ color: 'black' }}>Profile</Link>
                        </li>
                        <li className="list-group-item" style={offCanvasStyle}>
                            <Link to="/settings" className="text-decoration-none" style={{ color: 'black' }}>Settings</Link>
                        </li>
                        <li className="list-group-item" style={{offCanvasStyle}}>
                            <button onClick={handleLogout} className="btn btn-danger w-100">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
