import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Computer} from "../../interfaces/computer.interface";

@Component({
  selector: 'app-configuration-card',
  templateUrl: './computer-card.component.html',
  styleUrls: ['./computer-card.component.css']
})
export class ComputerCardComponent implements OnInit {
  private _computer: Computer;
  private _favorite$: EventEmitter<Computer>
  private _favorite: boolean;

  /**
   * Constructor for ComputerCard
   */
  constructor() {
    this._computer = {} as Computer;
    this._favorite$ = new EventEmitter<Computer>();
    this._favorite = false;
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

  @Output('favorite')
  get favorite(): EventEmitter<any>{
    return this._favorite$;
  }

  onFavorite(){
    this._favorite$.emit(this._computer);
    this._favorite = !this._favorite;
  }

  @Input('isFavorite')
  set isfavorite(value: boolean) {
    this._favorite = value;
  }

  get isfavorite(): boolean{
    return this._favorite;
  }

  get connected(): boolean{
    return !! sessionStorage.getItem('user');
  }
}
