import { Component, OnInit } from '@angular/core';
import {ChatService} from '../shared/service/chat.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogChatComponent} from '../shared/dialog/dialog-chat/dialog-chat/dialog-chat.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  public users: number = 0;
  public message: string = '';
  public messages: string[] = [];
  public user: string;

  constructor(private chatService: ChatService, private _dialog: MatDialog){

  }

  ngOnInit(): void{

    this.user = JSON.parse(sessionStorage.getItem('user')).login;
    this.chatService.receiveChat().subscribe((message: string) => {
      this.messages.push(message);
    });

    this.chatService.getUsers().subscribe((users: number) => {
      this.users = users;
    });

  }

  addChat(): void{
    this.messages.push(this.user + ' : ' + this.message);
    this.chatService.sendChat(this.user + ' : ' + this.message);
    this.message = '';
  }

}
