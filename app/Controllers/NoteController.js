import{appState} from "../AppState.js"
import { Note } from "../Models/Note.js";
import { NoteService } from "../Services/NoteService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { saveState } from "../Utils/Store.js";
import { setHTML } from "../Utils/Writer.js";


  

function _drawNote() {
    // console.log('this is my template');
    let notes = appState.notes;
    // console.log(notes);
    let template = ''
    notes.forEach(n => template += n.notesTemplate)
    // console.log('player template', template);
    setHTML('notes', template)
    // const textColor = document.querySelector('#textColor').value;
    // const noteBody = document.querySelector('#noteBody');
    
   
// CSS.color = textColor, noteBody;
}
    

function countNotes() {
  
    console.log(`User has ${appState.notes.length} notes`);
    return appState.notes.length;
    }

// Add event listener to "Save Note" button

function _drawActiveNote() {
    let activeNote = appState.activeNote
    console.log(activeNote,"f**k wont you work");
  
  }

      
   

export class NoteController{
    constructor(){
        // debugger
        console.log("note Controller")
          appState.on('activeNote', _drawActiveNote()) 
          appState.on('note', _drawNote())
    //   appState.on("noteid", setActive())
    }    
   
    
    setActive(noteId) {
        console.log('ActiveNote', noteId);
        NoteService.setActive(noteId)
    console.log(foundNote);
      }

setNote(){
    
    window.event.preventDefault()
    const form = window.event.target;
    // console.log('name:', form.name.value);
    appState.activeNote = form.name.value;
    // console.log("The active Note is:", appState.activeNote)
    let newNote = new Note({name: form.name.value})
    appState.notes.push(newNote)
    _drawNote()
countNotes()   

}

  saveNote() {
    
    let note = document.getElementById('noteBody')
    let noteBody = note.value
    casesService.saveNote(noteBody)

}

createNote() {
    window.event.preventDefault()
    let form = event?.target
    let formData = getFormData(form)
    formData.name = appState.userName
    console.log('this is my formData', formData);
    NoteService.createNote(formData)
    form.reset()


}




}


