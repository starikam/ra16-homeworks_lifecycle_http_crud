import { useState, useEffect } from 'react';
import { AddForm } from './components/AddForm/AddForm';
import { NoteList } from './components/NoteList/NoteList';
import { TitleReboot } from './components/TitleReboot/TitleReboot';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    fetch("http://localhost:7070/notes", {method: 'GET'})
      .then((response) => response.json())
      .then(result => {
        if (result) {
          setNotes(result);
        }
      });
  }

  async function createNote(currentText) {
    let newNote = {"id": uuidv4(), "content": currentText}
    fetch("http://localhost:7070/notes", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote)
    })
      .then(response => {
        if (response.ok) {
          getNotes();
          
        }
      })
  }

  async function deleteNote(id) {
    fetch(`http://localhost:7070/notes/${id}`, {method: 'DELETE'})
    .then(response => {
      if (response.ok) {
        getNotes();
      }
    })
  }


  return (
    <>
      <TitleReboot handleUpdate={getNotes} />
      <NoteList notes={notes} onDelete={deleteNote} />
      <AddForm handleSubmit={createNote} />
    </>
  )
}

export default App
