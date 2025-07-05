import React, { useState } from 'react';

const Settings = (props) => {
    const [selectedTheme, setSelectedTheme] = useState('light');
    const [titleFont, setTitleFont] = useState('')

    const handleChangeTheme = (event) => {
        setSelectedTheme(event.target.value);
        
    };
    const handleChangeFontTitle = (event) => {
        setTitleFont(event.target.value);
    };
    const handleClick=()=>{
        props.setTheme(selectedTheme);
        console.log("selected",selectedTheme);
        props.showAlert("Changes Saved!","success")
    }
    return (
        <div style={{ marginTop: '1rem' }}>
            <div>
                <h4>Theme:</h4>
                <div style={{ border: '2px solid grey', width: '90%', padding: '2rem' }}>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="theme"
                            id="dark"
                            value="dark"
                            onChange={handleChangeTheme}
                            checked={selectedTheme === 'dark'}
                        />
                        <label className="form-check-label" htmlFor="dark">
                            Dark Theme
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="theme"
                            id="light"
                            value="light"
                            onChange={handleChangeTheme}
                            checked={selectedTheme === 'light'}
                        />
                        <label className="form-check-label" htmlFor="light">
                            Light Theme
                        </label>
                    </div>
                </div>
            </div>
            <h4>Font Family:</h4>
            <div style={{ border: '2px solid grey', width: '90%', padding: '2rem' }}>
                <h5>Title</h5>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Default
                    </button>
                    <ul className="dropdown-menu">
                        <li><div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="titleFont"
                            id="default"
                            value=""
                            onChange={handleChangeFontTitle}
                            checked={titleFont === ''}
                        />
                        <label className="form-check-label" htmlFor="theme1">
                            Light Theme
                        </label>
                        </div></li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                </div>
                <h5>Description</h5>
                <div> 
                    
                </div>
                <h5>Tag</h5>
                <div> 
                    
                </div>
            </div>
            <button type="button" className="btn btn-info my-4" onClick={handleClick}>Confirm</button>
        </div>
    );
};

export default Settings;
