import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) {

  }

  sendChat(message): void{
    this.socket.emit('chat', message);
  }

  receiveChat(): Observable<unknown>{
    return this.socket.fromEvent('chat');
  }

  getUsers(): Observable<unknown>{
    return this.socket.fromEvent('users');
  }

}
