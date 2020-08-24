import React, { useState } from 'react'

const Input = ({label, name, required, handleChange, value, width, height, className, error, message}) => {
    
    return(
        <div className={className}>
            <label htmlFor={name}>{required && '*'}{label}</label>
            <input name={name} onChange={handleChange} value={value} type={name}/>
            {error && <span>{message}</span>}
        </div>
    )
}

export default Input