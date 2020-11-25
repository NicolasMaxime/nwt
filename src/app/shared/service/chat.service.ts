import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  _messages: string[] = [];
  constructor(private socket: Socket) {
  }

  get messages(): string[] {
    return this._messages;
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

  disconnect(): void {
    this.socket.disconnect();
  }

  connect(): void {
    this.socket.connect();
  }
}
