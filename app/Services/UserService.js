import { appState } from "../AppState.js";
appState
export class UserService{

    enterUserName(input){
        appState.userName = input
    
    }
 }
