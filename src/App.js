import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Settings from './components/Settings';

//REACT_APP_BACKEND_URL=https://inoteook-backend-1.onrender.com


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const [mode, setMode] = useState('light');
  const [color, setColor] = useState("black");
  const setTheme =(selectTheme)=>{
    if (selectTheme==='dark'){
      setMode('dark');
      setColor('white')
      document.body.style.backgroundColor ='#001A6E';
      
    }
    else {
      setMode('light')
      setColor('black')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <NoteState >
          
            <Navbar theme={mode} color={color}/>
            <Alert alert={alert}/>
          
          <div className="container mt-2 pt-3">
            <Routes>
              <Route path= '/about' element={<About showAlert={showAlert} theme={mode} color={color}/>}/>
              <Route path='/' element={<Home showAlert={showAlert} theme={mode} color={color}/>} />
              <Route path='/login' element={<Login showAlert={showAlert} theme={mode} color={color}/>} />
              <Route path='/signup' element= {<Signup showAlert={showAlert} theme={mode} color={color}/>} />
              <Route path='/settings' element={<Settings showAlert={showAlert} setTheme={setTheme} theme={mode} color={color}/>} />
              
            </Routes>
          </div>
          </NoteState>
      </Router>
    </>

  );
}

export default App;
