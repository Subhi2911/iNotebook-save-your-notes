import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const Notes = (props) => {
    const context = useContext(NoteContext);
    const {notes, getNotes, editNote}= context;
    const [loading, setLoading] = useState(true);
    let navigate=useNavigate();

    useEffect(()=>{
        const token= localStorage.getItem('token');
        if(token && token !== 'undefined' && token !== 'null'){
            getNotes().then(() => setLoading(false));
        }
        else{
            navigate('/login')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const ref= useRef(null);
    const refClose = useRef(null);

    const [note, setNote] = useState({id: "",etitle: "", edescription: "", etag:""})

    const updateNote = (currentNote)=>{
        ref.current.click();
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag
        });
        
    };
    
    const handleClick=(e)=>{
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click()
        props.showAlert("Note Updated Successfully!!", "success")
        
        
    };
    const onChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    let myStyle={color: props.color};
    let modalStyle={backgroundColor:props.theme==='dark'?'#273F4F':'white',
        color:props.color
    }
    let inputStyle={
        backgroundColor:props.theme==='dark'?'#456882':'white',
        color:props.color
    }
    return (
        <>
            <AddNote showAlert={props.showAlert} theme={props.theme} color={props.color}/>
            <button  type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Update Note
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header" style={{backgroundColor:props.theme==='dark'?'#273F4F':'white', color:'#FFB433'}}>
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={modalStyle}>
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input style={inputStyle} type="text" className="form-control" id="etitle" name="etitle"  value= {note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                    <div style={{height:'0.8rem'}}>
                                        <div id="titleHelp" className="form-text" style={{ visibility: note.etitle.length < 5 ? 'visible' : 'hidden' ,color:props.theme==='dark'?'#FFB433':'black', transition: 'visibility 0.2s ease'}}>Title must have at least 5 characters.</div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <textarea style={inputStyle} type="text" className="form-control" id="edescription" rows='3' name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                                    <div style={{height:'0.8rem'}}>
                                        <div  id="descriptionHelp" className="form-text" style={{ visibility: note.edescription.length < 5 ? 'visible' : 'hidden' ,color:props.theme==='dark'?'#FFB433':'black', transition: 'visibility 0.2s ease'}}>Description must have at least 5 characters</div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input style={inputStyle} type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}  required  />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer" style={modalStyle}>
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.etitle.length <5 || note.edescription.length <5 } className="btn btn-primary" onClick={handleClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={myStyle}>
                <h2>Your Notes</h2>
                {loading ? (
                <div className="d-flex justify-content-center my-5">
                    <Loader theme={props.theme} />
                </div>
                ) : (
                <div className='row my-3' style={myStyle}>
                    
                    <div className="container mx-1">
                        {notes.length === 0 && <p className="text-muted">No notes to display.</p>}
                    </div>
                    {Array.isArray(notes) && notes.map((note) => (
                    <NoteItem
                        key={note._id}
                        updateNote={() => updateNote(note)}
                        note={note}
                        showAlert={props.showAlert}
                        theme={props.theme}
                        color={props.color}
                    />
                    ))}
                </div>
                )}
            </div>

        </>
  )
}

export default Notes
