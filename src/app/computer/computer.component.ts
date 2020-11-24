import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ComputerService} from "../shared/service/computer.service";
import {Computer} from "../shared/interfaces/computer.interface";
import {PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-configuration',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  private _computers: Computer[];
  private _toDisplay: MatTableDataSource<Computer[]>;

  private _position: number;
  private _pageSize: number;

  constructor(private _computerService: ComputerService) {
    this._position = 0;
    this._pageSize = 6;
    this._toDisplay = new MatTableDataSource<Computer[]>();
  }

  ngOnInit(): void {
    this._computerService.getAll().subscribe(
      (computers: Computer[]) => {
        this._computers = computers;
        this._computers.map(x => x.photo = '../assets/ORDINNATEUR.jpg');
      });
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

}
