import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ComputerService} from "../shared/service/computer.service";
import {Computer} from "../shared/interfaces/computer.interface";
import {PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {User} from "../shared/interfaces/user.interface";
import {UserService} from "../shared/service/user.service";
import {$e} from "codelyzer/angular/styles/chars";
import {map, retry, tap} from "rxjs/operators";

@Component({
  selector: 'app-configuration',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  private _computers: Computer[];
  private _toDisplay: MatTableDataSource<Computer[]>;
  private _user: User;
  private _login: string;
  private _position: number;
  private _pageSize: number;

  constructor(private _computerService: ComputerService,
              private _userService: UserService) {
    this._position = 0;
    this._pageSize = 6;
    this._toDisplay = new MatTableDataSource<Computer[]>();
    this._user = {} as User
  }

  ngOnInit(): void {
    this._computerService.getAll().subscribe(
      (computers: Computer[]) => {
        this._computers = computers;
        this._computers.map(x => x.photo = '../assets/ORDINNATEUR.jpg');
      });
    this._login = JSON.parse(sessionStorage.getItem('user')).login;
    if (!!this._login){
      this._userService.getOne(this._login).subscribe(_ => this._user = _);
    }
  }

  /**
   * Getter for all computers
   */
  get computers(): Computer[]{
    return this._computers;
  }

  /**
   * Event emitted when page is changer
   * @param $event
   */
  pageEvent($event: PageEvent){
    this._position = $event.pageIndex;
  }

  /**
   * get Number of item per page
   */
  get pageSize(): number{
    return this._pageSize;
  }

  /**
   * Get the array to diplay in slider
   */
  get toDisplay(): Computer[]{
    this.refresh();
    return this._toDisplay.data.shift();
  }

  /**
   * Set the array which will be displayed
   * @private
   */
  private _makeDisplay(): Computer[]{
    let start = this._position * this.pageSize;
    let ret = [];
    for (let i = 0; i != this._pageSize; i++){
      if (this._computers[start]) {
        ret.push(this._computers[start]);
        start = start + 1;
      }
    }
    return ret;
  }

  /**
   * Function to refresh the array
   */
  refresh(){
    this._toDisplay.data.shift();
    this._toDisplay.data.push(this._makeDisplay());
  }

  addFavorite($event: Computer) {
    if (!this._user.favorites){
      this._user.favorites = [] as Computer[];
    }
    if (!this._user.favorites.find(_ => _.name === $event.name)) {
      this._user.favorites.push($event);
    }else {
      this._user.favorites.splice(this._user.favorites.indexOf($event), 1);
    }
    delete this._user['id'];
    delete this._user['_id'];
    delete this._user['login'];
    this._userService.updateFavorite(this._user, this._login).subscribe()
  }

  isFavorite(computer: Computer) {
    if (this._user.favorites && this._user.favorites.find(_ => _.name === computer.name))
      return true;
    return false;
  }
}
