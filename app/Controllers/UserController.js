import { UserService } from '../Services/UserService.js';
import { Pop } from '../Utils/Pop.js';


export class UserController{
    constructor(){
        console.log('user Controller')
    }
 
 async enterUserName(){
    let input = await Pop.prompt("enter name")
    if (!input) return
    UserService.enterUserName(input)
 }
}