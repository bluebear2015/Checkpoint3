import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { saveState } from "../Utils/Store.js";

function _saveNotes() {
    saveState('notes', appState.notes)
  }

class noteService{

    createNote(formData) {
        let newNote = new Note(formData)
       console.log("this is my new note");
        appState.notes.push(newNote)
       
        _saveNotes()
        
        newNote.unlocked = true
        appState.activeNote = newNote
        appState.emit('note')
      }

    saveNoteBody(noteBody) {
        let activeNote = appState.activeNote
      
        activeNote.noteBody = noteBody
        console.log( "SaveNoteBody",noteBody );
        
        appState.emit('activeNote')
        _saveNotes()
      }

      setActive(noteId) {
       
        let Note = appState.notes.find(n => n.id == noteId)
       
        console.log('FoundNote', foundNote);
      
        appState.activeNote = Note
        console.log('services', appState.activeNote);
        _saveNotes()
      }

    }     




export const NoteService = new noteService()