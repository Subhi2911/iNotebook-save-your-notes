import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    
    const notesInitial = [
    {
        "_id": "685d5058974b36bfd5af1969",
        "user": "685d2d921ff644b45602c8ff",
        "title": "My Title",
        "description": "Please wake up babe!",
        "tag": "personal",
        "date": "2025-06-26T13:51:20.293Z",
        "__v": 0
    },
    {
        "_id": "685d61f8s7bdfbe52f75fa3a",
        "user": "685d2d921ff644b45602c8ff",
        "title": "My Title",
        "description": "Please wake up babe!",
        "tag": "personal",
        "date": "2025-06-26T15:06:32.071Z",
        "__v": 0
    },
    {
        "_id": "685d621c1qbdfbe52f75fa3c",
        "user": "685d2d921ff644b45602c8ff",
        "title": "Bibhu",
        "description": "hi! myself baibhav",
        "tag": "personal",
        "date": "2025-06-26T15:07:08.987Z",
        "__v": 0
    },
    {
        "_id": "685d62301fbdfbe52f75fa3e",
        "user": "685d2d921ff644b45602c8ff",
        "title": "Come on ",
        "description": "Come on Don't leame me it cant be that easy babe",
        "tag": "song lyrics",
        "date": "2025-06-26T15:07:28.183Z",
        "__v": 0
    },
    {
        "_id": "685d61f81gbdfbe52f75fa3a",
        "user": "685d2d921ff644b45602c8ff",
        "title": "My Title",
        "description": "Please wake up babe!",
        "tag": "personal",
        "date": "2025-06-26T15:06:32.071Z",
        "__v": 0
    },
    {
        "_id": "685d621c1wbdfbe52f75fa3c",
        "user": "685d2d921ff644b45602c8ff",
        "title": "Bibhu",
        "description": "hi! myself baibhav",
        "tag": "personal",
        "date": "2025-06-26T15:07:08.987Z",
        "__v": 0
    },
    {
        "_id": "685d62301ybdfbe52f75fa3e",
        "user": "685d2d921ff644b45602c8ff",
        "title": "Come on ",
        "description": "Come on Don't leame me it cant be that easy babe",
        "tag": "song lyrics",
        "date": "2025-06-26T15:07:28.183Z",
        "__v": 0
    }

    ]
    const [notes, setNotes] = useState(notesInitial)
    
    //Add a note
    const addNote = (title,description,tag) =>{
        //API call
        console.log("Adding a new note")
        console.log(title)
        const note = { 
            "_id": "6d5d63301ybdfbe52f75fa3e",
        "user": "685d2d921ff644b45602c8ff",
        "title": title ,
        "description": description,
        "tag": tag,
        "date": "2025-06-26T15:07:28.183Z",
        "__v": 0
    };
        setNotes(notes.concat(note))
    }
    //Delete a note
    const deleteNote = () =>{
        
    }
    //Edit a note
    const editNote = () =>{
        
    }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;