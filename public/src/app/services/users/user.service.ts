import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Owner, Manager, Student } from '../../../classes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  async getAllUsers() {
    let doPromise = new Promise((resolve) => {
      this.http.get('/api/get_all_users').subscribe(
        data => {
          let usersDb:any[any] = [];
          for (const user in data) {
            if (data.hasOwnProperty(user)) {
              const preUser = data[user];
              let newUser:any = this.convertDataToObject(preUser);
              usersDb.push(newUser);
            }
          }
          resolve(usersDb);
          },
        err => {
          console.error(err);
          }
      );
    });

    let doneRequest = await doPromise;

    return doneRequest;
  }

  async getUserById(pUserId:string) {
    let doRequest = new Promise((resolve) => {
      this.http.put('/api/get_user', {id: pUserId}).subscribe(
        (data) => {
            let currentUser:any;
            const preUser = data;
            currentUser = this.convertDataToObject(preUser);
            resolve(currentUser);
          },
        (err) => {
          console.error(err);
          }
      );
    })

    let doneRequest = await doRequest;
    return doneRequest;
  }

  convertDataToObject(pUserData:any) {
    let newUser:any;
    switch (pUserData._role) {
      case `Owner`:
        newUser = new Owner(pUserData);
        break;

      case `Manager`:
        newUser = new Manager(pUserData);
        break;

      case `Student`:
        newUser = new Student(pUserData);
        break;
    
      default:
        break;
    }

    return newUser;
  }
}
