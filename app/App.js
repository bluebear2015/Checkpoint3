import { NoteController } from "./Controllers/NoteController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
class App {
    // valuesController = new ValuesController();
    noteController = new NoteController()
  }
  
  window["app"] = new App();