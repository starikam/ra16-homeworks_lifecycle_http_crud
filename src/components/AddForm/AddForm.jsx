import React from 'react';
import { useState } from 'react';
import './AddForm.css';

export const AddForm = ({handleSubmit}) => {

  const [currentText, setCurrentText] = useState('');

  const handleChange = (event) => {
    setCurrentText(event.target.value);
  }

  const handlerForSubmit = (event) => {
    event.preventDefault();
    handleSubmit(currentText);
    setCurrentText('');
  }
    
  return (
    <form className='form' onSubmit={handlerForSubmit}>
        <h3 className='new-note'>New note</h3>
        <textarea className='text' name='content' value={currentText} onChange={handleChange} />
        <button className='btn-add'>
          <img src='/img/paper-plane.png' alt='' />
        </button>
    </form>
  )
}
