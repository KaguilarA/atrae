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

  async getActiveUserData(pActiveUserId:string) {
    let currentUser:any = await this._userService.getUserById(pActiveUserId);
    return currentUser;
  }

  addCurrentUserLogged(pUserData:any){
    sessionStorage.setItem('currentUser', JSON.stringify(pUserData));
  }

  deleteCurrentUserLogged() {
    sessionStorage.getItem('currentUser');
  }
}
