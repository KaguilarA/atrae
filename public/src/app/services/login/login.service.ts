import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../users/user.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  sesionStorageCollection:string = 'NnåværendeBrukerATRAE';
  constructor(private http:HttpClient, private _userService: UserService) { }

  async logIn(pUserData:any) {
    let doPromise = new Promise((resolve) => {
      this.http.put('/api/login', pUserData).subscribe(
        (data: any)=> {
          this.addCurrentUserLogged(data);
          resolve(Boolean(data.condition));
          },
        (err) => {
          console.error(err);
          }
      );
    });

    let donePromise = await doPromise;

    return donePromise;
  }

  checkLoggedUser() {
    let logginData:any = JSON.parse(sessionStorage.getItem(this.sesionStorageCollection));
    let isUserLogged:Boolean;
    if (logginData !== null) {
      isUserLogged = Boolean(logginData.condition);
    } else {
      isUserLogged = false;
    }
    
    return isUserLogged;
  }

  async getActiveUserData() {
    const isLogger:Boolean = this.checkLoggedUser();
    let activeUserId:any;
    if (isLogger === true) {
      activeUserId = JSON.parse(sessionStorage.getItem(this.sesionStorageCollection));
    } else {
      
    }
    let currentUser:any = await this._userService.getUserById(activeUserId.id);
    return currentUser;
  }

  addCurrentUserLogged(pUserData:any){
    sessionStorage.setItem(this.sesionStorageCollection, JSON.stringify(pUserData));
  }

  deleteCurrentUserLogged() {
    sessionStorage.getItem(this.sesionStorageCollection);
  }
}
