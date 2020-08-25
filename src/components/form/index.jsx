import React from 'react'

const Form = ({ handleSubmit, children, className }) => {
  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  )
}

export default Form
