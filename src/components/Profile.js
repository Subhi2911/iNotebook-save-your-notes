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
        backgroundColor: props.theme==='dark'?'#232D3F':'white',
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
                <p style={{color:'#FFB433'}} className="small">User ID: {user._id}</p>
            </div>

            <table className="table table-bordered" style={myStyle}>
                <tbody >
                    <tr >
                        <th style={{  ...myStyle, color: '#FFB433', width: '40%', textAlign: 'center' }}>Username:</th>
                        <td style={{...myStyle, textAlign: 'center' }}>{user.name}</td>
                    </tr>
                    <tr>
                        <th style={{ ...myStyle, color: '#FFB433' ,width: '40%', textAlign: 'center'}}>Email:</th>
                        <td style={{...myStyle, textAlign: 'center' }}>{user.email}</td>
                    </tr>
                    <tr>
                        <th style={{ ...myStyle, color: '#FFB433',width: '40%' , textAlign: 'center'}}>Date of Join:</th>
                        <td style={{...myStyle, textAlign: 'center' }}>{new Date(user.date).toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Profile;
