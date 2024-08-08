import React from 'react';
import './NoteList.css';

export const NoteItem = ({ content, id, onDelete }) => {
  return (
    <div className='note'>
        <button className='delete-btn' onClick={() => onDelete(id)}>X</button>
        <p className='note-content'>{content}</p>
    </div>
  )
}
