import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const token = localStorage.getItem('token');
    console.log(props.theme);
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
    
    return (
        <>
            <nav className={`navbar navbar-expand-lg fixed-top  navbar-${props.theme}`} style={{backgroundColor: props.color}} >
                <div className="container-fluid">
                    <h6 className="navbar-brand">NoteXpress</h6>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                        </ul>

                        {!token || token === 'undefined' || token === 'null' ? (
                            <form className="d-flex" role="search">
                                <Link className="btn btn-outline-primary mx-2" to="/login">Log in</Link>
                                <Link className="btn btn-outline-primary mx-2" to="/signup">Sign Up</Link>
                            </form>
                        ) : (
                            <div>
                                {/* User Icon that opens Offcanvas */}
                                <i
                                    className="fa-solid fa-circle-user fa-2xl"
                                    style={{ cursor: "pointer" }}
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#userOffcanvas"
                                    aria-controls="userOffcanvas"
                                ></i>
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
                <div className="offcanvas-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/profile" className="text-decoration-none">Profile</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/settings" className="text-decoration-none">Settings</Link>
                        </li>
                        <li className="list-group-item">
                            <button onClick={handleLogout} className="btn btn-danger w-100">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
 