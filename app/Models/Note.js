import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Note{
constructor(data){
  this.id = data.id || generateId()
    this.name = data.name
    this.date = data.date ? new Date(data.date) : new Date()
}

get notesTemplate(){
  return `
  <div class="col-12">
      <div class="card border border-info border-5 elevation-5 bg-secondary m-3 text-center">
<p class="card-title text-center fs-1 elevation-2" border border-5 border-info>
${this.name}
</p>
<p class="card-secondary  text-center fs-3 elevation-3">
${this.ComputeDate}
</p>

<textarea name="noteBody" id="noteBody" cols="30" rows="10"></textarea>
<label for="textColor">Text Color:</label>
<select name="textColor" id="textColor">
  <option value="black">Black</option>
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
</select>
<div>
<button onclick"appState.NoteController.saveNote()" onSubmit="appState.NoteService.createNote()" class="elevation-3 text-dark btn-dark">Save Note</button>
<button  class="elevation-3 text-dark btn-dark">Delete Note</button>
</div>
<div  class="border border-info border-5 fs-2">
<h3class="elevation-5">Note Log</h3class=>
<p onclick="app.NoteController.setActive('${this.id}')">
${this.name}

</p>
<p>
Saved Notes: ${appState.activeNote.length}
</p>
<p>
 saved on: ${this.ComputeDate}
</p>
<div class="">
<div>
<p></p>
</div>
</div>
</div>     
</div>
    </div>
  `
}
get ComputeDate() {
  let date = this.date
  // NOTE each date.getXYZ is its own string so it needs to be wrapped in its own parens and then string concatenated with the other info 
  return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + (date.getFullYear())
}



}