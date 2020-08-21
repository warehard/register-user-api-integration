import React, { useState } from 'react'

const Input = ({label, name, rules, handleChange, value, width, height, className, error, message}) => {
    
    return(
        <div className={className}>
            <label htmlFor={name}>{rules.required && '*'}{label}</label>
            <input name={name} onChange={handleChange} value={value}/>
            {error && <span>{message}</span>}
        </div>
    )
}

export default Input