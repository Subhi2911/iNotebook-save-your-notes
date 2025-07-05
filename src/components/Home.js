import Notes from './Notes';
//import Alert from './Alert';

const Home = (props) => {

  
  return (
    <div style={{marginTop:'0.8rem'}} >
      
      <Notes showAlert={props.showAlert} theme={props.theme} color={props.color}/>
    </div>
  )
}

export default Home
