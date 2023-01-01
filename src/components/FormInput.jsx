import React from 'react'
import './FormInput.css'
const FormInput = ({placeholder}) => {
  return (
    <div className='forminput'>
        <label >Username </label>
        <input type="text" placeholder={placeholder}/>
    </div>
  )
}

export default FormInput