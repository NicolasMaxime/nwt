import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Computer} from "../interfaces/computer.interface";
import {defaultIfEmpty, filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  private _backendUrlConfig: any;

  /**
   * Constructor for ComputerService
   * @param _http
   */
  constructor(private _http : HttpClient) {
      this._backendUrlConfig = {};

      let tmp = `${environment.backend.protocol}://${environment.backend.host}`;
      if (environment.backend.port){
        tmp += `:${environment.backend.port}`;
      }
      Object.keys(environment.backend.endpointsConfig).forEach(
        x => this._backendUrlConfig[x] = `${tmp}${environment.backend.endpointsConfig[x]}`
      )
  }

  /**
   * Getall computer
   */
  getAll(): Observable<Computer[]>{
    return this._http.get<Computer[]>(this._backendUrlConfig.getAll).pipe(
          filter(_ => !!_),
          defaultIfEmpty([])
    );
  }
}
