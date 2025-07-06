import React from 'react'

const Loader = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <div className={`spinner-border text-${props.theme==='dark'?'light':'dark'}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader

