import React from 'react'

const Button = ({handleClick, buttonName, className, width, height }) => {
    return(
    <button onClick={handleClick} className={className}>{buttonName}</button>
    )
}

export default Button