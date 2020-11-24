import {Component, Input, OnInit} from '@angular/core';
import {Computer} from "../../interfaces/computer.interface";

@Component({
  selector: 'app-configuration-card',
  templateUrl: './computer-card.component.html',
  styleUrls: ['./computer-card.component.css']
})
export class ComputerCardComponent implements OnInit {
  private _computer: Computer;

  /**
   * Constructor for ComputerCard
   */
  constructor() {
    this._computer = {} as Computer;
  }

  ngOnInit(): void {
  }

  /**
   * the computer to display
   */
  get computer(): Computer{
    return this._computer;
  }

  /**
   * Let's set a computer, cause we need one
   * @param value
   */
  @Input('computer')
  set computer(value: Computer){
    this._computer =  value;
  }

}
