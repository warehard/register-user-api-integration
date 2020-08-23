import React, { useState } from 'react'

const Input = ({label, name, required, handleChange, value, width, height, className, error, message}) => {
    
    return(
        <div className={className}>
            <label htmlFor={name}>{required && '*'}{label}</label>
            <input type={name} name={name} onChange={handleChange} value={value}/>
            {error && <span>{message}</span>}
        </div>
    )
}

export default Input