import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatService} from '../shared/service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  public users: number ;
  public message: string = '';
  public messages: string[] ;
  public user: string;

  constructor(private chatService: ChatService){
  }

  ngOnInit(): void{
    this.messages = this.chatService.messages;
    this.chatService.connect();
    this.user = JSON.parse(sessionStorage.getItem('user')).login;
    this.chatService.receiveChat().subscribe((message: string) => {
      this.messages.push(message);
      this.chatService._messages = this.messages;
    });

    this.chatService.getUsers().subscribe((users: number) => {
      this.users = users;
    });


  }

  addChat(): void{
    this.messages.push(this.user + ' : ' + this.message);
    this.chatService._messages = this.messages;
    this.chatService.sendChat(this.user + ' : ' + this.message);
    this.message = '';
  }

  ngOnDestroy(): void {
    this.chatService.disconnect();
    this.messages = [];
  }

}
