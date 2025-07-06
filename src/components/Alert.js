import React from 'react'

const Alert = (props) => {
    const capitalize = (word)=>{
        if (word==='danger'){
            return "Error"
        }
        else{
            const lower= word.toLowerCase();
            return lower.charAt(0).toUpperCase()+lower.slice(1)
        }
        
    }

    return (
        <div >
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show alert-top`} role="alert">
                <strong>{capitalize(props.alert.type)} :  </strong>{props.alert.msg}
            </div>}
        </div>
  )
}

export default Alert
