


import React from 'react';
import { NoteItem } from './NoteItem';

export const NoteList = ({notes, onDelete}) => {
  return (
    <div className='note-list'>
        {notes.map((note) => {
           return(
            <NoteItem key={note.id} id={note.id} content={note.content} onDelete={onDelete} />
           ) 
        })}
    </div>
  )
}
