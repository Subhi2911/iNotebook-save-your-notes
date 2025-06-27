import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';


function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar/>
          <Alert message="This is nice!"/>
          <div className="container">
            <Routes>
              <Route path= '/about' element={<About/>}/>
              <Route path='/' element={<Home/>}/>
            </Routes>
          </div>
          
        </Router>
      </NoteState>
    </>

  );
}

export default App;
