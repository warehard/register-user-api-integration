import React from 'react'

const Button = ({handleClick, buttonName, className, width, height, buttonIcon }) => {
    return(
    <button onClick={handleClick} className={className}><span>{buttonName}</span> <img src={buttonIcon} className='icon'/></button>
    )
}

export default Button