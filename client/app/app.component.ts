import { Component } from '@angular/core';
import {MessageService} from './services/message.service';
import {Message} from '../Message';
@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  providers:[MessageService]
})
export class AppComponent  {
  source='mypic.jpg';
  messages: Message[];
  name:string;
  message:string;
  constructor(private messageService : MessageService){
  this.messageService.getMessages()
  .subscribe(messages =>{
    this.messages = messages;
  })
  }
  addMessage(event:any){
    event.preventDefault();
    var newMessage =  {
      name:this.name,
      message: this.message
    }
    this.messageService.addMessage(newMessage)
        .subscribe(message =>{
        //  this.message.push(message);
          this.name='';
          this.message='';
        })
  }
}
