import {Computer} from "./computer.interface";

export interface User{
  login: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  favorites?: Computer[];
}
