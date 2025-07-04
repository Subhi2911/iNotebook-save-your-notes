import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(NoteContext);
    const {notes, getNotes, editNote}= context;
    let navigate=useNavigate();

    useEffect(()=>{
        const token= localStorage.getItem('token');
        if(token && token !== 'undefined' && token !== 'null'){
            getNotes()
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
    let myStyle={color:props.color}
    return (
        <>
            <AddNote showAlert={props.showAlert} theme={props.theme} color={props.color}/>
            <button  type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Update Note
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle"  value= {note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <textarea type="text" className="form-control" id="edescription" row='3' name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}  required  />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.etitle.length <5 || note.edescription.length <5 || note.etag.length < 5} className="btn btn-primary" onClick={handleClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3' style={myStyle}>
                <h2>Your Notes</h2>
                <div className="container mx-1">
                    {notes.length===0 && 'No notes to display!'}
                </div>
                {Array.isArray(notes) && notes.map((note)=>{
                return <NoteItem key={note._id} updateNote={()=>updateNote(note)} note={note} showAlert={props.showAlert} theme={props.theme} color={props.color}/>;
            })}
            </div>
        </>
  )
}

export default Notes
