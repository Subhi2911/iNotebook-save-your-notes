import React, { useState, useEffect } from 'react';

const Settings = (props) => {
  const [selectedTheme, setSelectedTheme] = useState(props.theme);

  
  const [color, setColor] = useState('#001A6E');

  useEffect(() => {
    setSelectedTheme(props.theme);
    if (props.theme === 'dark') {
      
      setColor('white');
    } else {
      
      setColor('#001A6E');
    }
  }, [props.theme]);

  const handleChangeTheme = (event) => {
    const newTheme = event.target.value;
    props.setTheme(newTheme); // Will trigger useEffect
    props.showAlert(`Theme changed to ${newTheme}`, "success");
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <div>
        <h4 style={{  color: color }}>Theme:</h4>
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
              style={{  color: color }}
            />
            <label
              style={{  color: color }}
              className="form-check-label"
              htmlFor="dark"
            >
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
              style={{  color: color }}
            />
            <label
              style={{  color: color }}
              className="form-check-label"
              htmlFor="light"
            >
              Light Theme
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
