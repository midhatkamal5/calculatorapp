import React from 'react'

function Button(props)
{
 return(
    <React.Fragment>
    <button onClick={props.click} className={props.class}>{props.label}</button>
    </React.Fragment>
 );  
}

export default Button