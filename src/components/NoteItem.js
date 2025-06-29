import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';


const NoteItem = ( props ) => {
  const context = useContext(NoteContext);
  const {deleteNote}= context;
  const { note, updateNote } = props;

  const handleDelete=()=>{
     deleteNote(note._id);
    props.showAlert("Note deleted successfully!", "success");
  };
  
  return (
    <div className='col-md-3 my-3'>
      <div className="card" style={{ width: "16rem" }}>
        <span className=" badge rounded-pill bg-danger " style={{display:'flex',
                justifyContent:'flexEnd', 
                position:'absolute',
                right:'0'}}>
              {note.tag}
              </span>
        <div className="card-body my-2">
            <h5 className="card-title">{note.title}</h5>
              
            <p className="card-text">{note.description}</p>
            <i className="fas fa-trash mx-3" onClick={handleDelete}></i>       
            <i className="fas fa-edit mx-3" onClick={()=>{updateNote(note)}}></i>        
            
        </div>
      </div>
    </div>
  )
}

export default NoteItem
