import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = process.env.REACT_APP_BACKEND_URL
    
    
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
    
      //Get all note
    const getNotes = async() =>{
        //API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        
        });
        const json = await response.json();
        
        setNotes(Array.isArray(json) ? json : json.notes || []);

    };


    //Add a note
    const addNote = async(title,description,tag) =>{
        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title,description,tag }),
        // …
        
        });
        const note = await response.json();
        
        setNotes(notes.concat(note));
        
    }
    //Delete a note
    const deleteNote = async(id) =>{
        // eslint-disable-next-line no-unused-vars
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            
        });
        
        

        const newNotes = notes.filter((note)=>{
           return note._id!==id
        })
        setNotes(newNotes)
        
    }
    //Edit a note
    const editNote = async(id,title,description,tag) =>{
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title,description,tag }),
        // …
        
        });
        // eslint-disable-next-line no-unused-vars
        const json = await response.json();
        let newNotes = JSON.parse(JSON.stringify(notes));
        

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id){
                newNotes[index].title =title;
                newNotes[index].description= description;
                newNotes[index].tag= tag;
                break;
            }
            
        }
        setNotes(newNotes);
        
    }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;