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
    let inputStyle={
        backgroundColor:props.theme==='dark'?'#273F4F':'white',
        color:props.theme==='dark'?'white':'black',
    }
    
    return (
        <div>
            <div className="container " >
                <h2 style={myStyle}>Add a Note</h2>
                <form className='my-3'style={myStyle}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input style={inputStyle} type="text" className="form-control" id="title" name="title"  value= {note.title} aria-describedby="emailHelp" onChange={onChange} />
                    <div style={{height:'0.8rem'}}>
                        <div id="titleHelp" className="form-text" style={{ visibility: note.title.length < 5 ? 'visible' : 'hidden',color:props.theme==='dark'?'#FFB433':'black' ,transition: 'visibility 0.2s ease',}}>Title must have at least 5 characters.</div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea style={inputStyle} type="text" className="form-control" rows='3' id="description" name="description" value={note.description} onChange={onChange} />
                    <div style={{height:'0.8rem'}}>
                        <div id="descriptionHelp" className="form-text" style={{ visibility: note.description.length < 5 ? 'visible' : 'hidden' ,color:props.theme==='dark'?'#FFB433':'black',transition: 'visibility 0.2s ease',}}>Description must have at least 5 characters</div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input style={inputStyle} type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                </div>
                <button type="submit" disabled={note.title.length <5 || note.description.length <5 }  className="btn btn-primary" onClick={handleClick}>Submit</button>
                </form>
                
            </div>
        </div>
    )
}

export default AddNote
