import React, { useState, useEffect } from 'react';

const Settings = (props) => {
  const [selectedTheme, setSelectedTheme] = useState(props.theme);

  const [bgColor, setBgColor] = useState('white');
  const [color, setColor] = useState('#001A6E');

  useEffect(() => {
    setSelectedTheme(props.theme);
    if (props.theme === 'dark') {
      setBgColor('#001A6E');
      setColor('white');
    } else {
      setBgColor('white');
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
        <h4 style={{ backgroundColor: bgColor, color: color }}>Theme:</h4>
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
              style={{ backgroundColor: bgColor, color: color }}
            />
            <label
              style={{ backgroundColor: bgColor, color: color }}
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
              style={{ backgroundColor: bgColor, color: color }}
            />
            <label
              style={{ backgroundColor: bgColor, color: color }}
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
