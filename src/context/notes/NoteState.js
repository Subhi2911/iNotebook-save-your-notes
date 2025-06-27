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
        "_id": "685d61f817bdfbe52f75fa3a",
        "user": "685d2d921ff644b45602c8ff",
        "title": "My Title",
        "description": "Please wake up babe!",
        "tag": "personal",
        "date": "2025-06-26T15:06:32.071Z",
        "__v": 0
    },
    {
        "_id": "685d621c17bdfbe52f75fa3c",
        "user": "685d2d921ff644b45602c8ff",
        "title": "Bibhu",
        "description": "hi! myself baibhav",
        "tag": "personal",
        "date": "2025-06-26T15:07:08.987Z",
        "__v": 0
    },
    {
        "_id": "685d623017bdfbe52f75fa3e",
        "user": "685d2d921ff644b45602c8ff",
        "title": "Come on ",
        "description": "Come on Don't leame me it cant be that easy babe",
        "tag": "song lyrics",
        "date": "2025-06-26T15:07:28.183Z",
        "__v": 0
    },
    {
        "_id": "685d61f817bdfbe52f75fa3a",
        "user": "685d2d921ff644b45602c8ff",
        "title": "My Title",
        "description": "Please wake up babe!",
        "tag": "personal",
        "date": "2025-06-26T15:06:32.071Z",
        "__v": 0
    },
    {
        "_id": "685d621c17bdfbe52f75fa3c",
        "user": "685d2d921ff644b45602c8ff",
        "title": "Bibhu",
        "description": "hi! myself baibhav",
        "tag": "personal",
        "date": "2025-06-26T15:07:08.987Z",
        "__v": 0
    },
    {
        "_id": "685d623017bdfbe52f75fa3e",
        "user": "685d2d921ff644b45602c8ff",
        "title": "Come on ",
        "description": "Come on Don't leame me it cant be that easy babe",
        "tag": "song lyrics",
        "date": "2025-06-26T15:07:28.183Z",
        "__v": 0
    }

    ]
    const [notes, setNotes] = useState(notesInitial)
    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;