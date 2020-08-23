import React, { useState } from 'react'
import Input from '../input/'
const Form = ({handleSubmit, children, className, titleSize}) => {
    return(
        <form onSubmit={handleSubmit} className={className}>
            {children}
        </form>
    )
}

export default Form