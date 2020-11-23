import {Component, Input, OnInit} from '@angular/core';
import {Computer} from "../../interfaces/computer.interface";

@Component({
  selector: 'app-configuration-card',
  templateUrl: './computer-card.component.html',
  styleUrls: ['./computer-card.component.css']
})
export class ComputerCardComponent implements OnInit {
  private _computer: Computer;

  constructor() {
    this._computer = {} as Computer;
  }

  ngOnInit(): void {
  }

  get computer(): Computer{
    return this._computer;
  }

  @Input('computer')
  set computer(value: Computer){
    this._computer =  value;
  }

}
