import React, { useEffect, useState } from 'react';
import Avatar from './Avatar';
import Loader from './Loader';

const Profile = (props) => {
    const [user, setUser] = useState(null);
    const host = process.env.REACT_APP_BACKEND_URL; 
    const token = localStorage.getItem("token");

    useEffect(() => { 
        const fetchUser = async () => {
            try {
                const response = await fetch(`${host}/api/auth/getuser`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token,
                    },
                });
                const json = await response.json();
                setUser(json);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        if (token) {
            fetchUser();
        }
    }, [token, host]);

    const myStyle = {
        backgroundColor: props.theme === 'dark' ? '#393E46' : 'white',
        color: props.color
    };

    if (!user) {
        return (
            <div className='container' >
                <Loader theme={props.theme}/>
            </div>
        );
    }

    return (
        <div className='Container'>
            <div className='d-flex justify-content-center' style={myStyle}>
                <div className='profile-image d-flex justify-content-center align-items-center'
                     style={{ width: '11.5rem', height: '11.5rem', backgroundColor: 'black', borderRadius: '50%' }}>
                    <Avatar name={user.name} theme={props.theme} size={40} />
                </div>
            </div>

            <div className='d-flex justify-content-center' style={myStyle}>
                <p className="fw-semibold my-3">{user.email}</p>
            </div>
            <div className='d-flex justify-content-center' >
                <p style={{color:'#FFB433'}} className="text-muted small">User ID: {user._id}</p>
            </div>

            <ul className="list-group">
                <li className="list-group-item" style={myStyle}>
                    <strong style={{color:'#FFB433'}}>Username:</strong> <p style={{display:'inline'}}>{user.name}</p>
                </li>
                <li className="list-group-item" style={myStyle}>
                    <strong style={{color:'#FFB433'}}>Email:</strong> <p style={{display:'inline'}}>{user.email}</p>
                </li>
                <li className="list-group-item" style={myStyle}>
                    <strong style={{color:'#FFB433'}}>Date of Join:</strong> <p style={{display:'inline'}}>{new Date(user.date).toLocaleString()}</p>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
