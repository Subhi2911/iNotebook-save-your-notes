import React, {useContext, useState} from 'react';
import NoteContext from '../context/notes/noteContext';

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const {addNote}= context;

    const [note, setNote] = useState({title: "", description: "", tag:""})

    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        props.showAlert("Note Added Successfully!!","success");
        setNote({ title: "", description: "", tag: "" });
    };
    const onChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    let myStyle={color: props.theme==='dark'?'white':'black'};
    console.log(props.theme)
    return (
        <div>
            <div className="container my-3" >
                <h2 style={myStyle}>Add a Note</h2>
                <form className='my-3'style={myStyle}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title"  value= {note.title} aria-describedby="emailHelp" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" className="form-control" row='3' id="description" name="description" value={note.description} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
                </div>
                <button type="submit" disabled={note.title.length <5 || note.description.length <5 } className="btn btn-primary" onClick={handleClick}>Submit</button>
                </form>
                
            </div>
        </div>
    )
}

export default AddNote
