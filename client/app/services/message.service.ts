import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class MessageService{
    constructor(private http : Http){
 console.log("Message service initlized..");
    }

  getMessages(){
      return this.http.get('http://localhost:5000/api/messages')
      .map(res => res.json());
     }
     addMessage(newMessage:any){
             var headers = new Headers();
             headers.append('Content-type','application/json');
                 return this.http.post('http://localhost:5000/api/message',JSON.stringify(newMessage),{headers:headers})
                 .map(res => res.json);
     }
}
