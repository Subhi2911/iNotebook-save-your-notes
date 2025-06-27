import React from 'react'

const NoteItem = ({ note }) => {
  return (
    <div className='col-md-3 my-3'>
      <div className="card" style={{ width: "16rem" }}>
        <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <i className="fas fa-trash mx-3"></i>       
            <i className="fas fa-edit mx-3"></i>        
            
        </div>
      </div>
    </div>
  )
}

export default NoteItem
