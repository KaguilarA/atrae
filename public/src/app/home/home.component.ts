import { Component, OnInit } from '@angular/core';
import { faBell, faCalendar, faBars, faClipboardList, faBus, faBriefcase, faHome, faCalculator, faUser, faTimesCircle, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../services/login/login.service';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faHome = faHome;
  faCalculator = faCalculator;
  faUser = faUser;
  faFileContract = faFileContract;
  faTimesCircle = faTimesCircle;
  faClipboardList = faClipboardList;
  faBus = faBus;
  faBriefcase = faBriefcase;
  faBell = faBell;
  faCalendar = faCalendar;
  faBars = faBars;

  constructor(private _loginService: LoginService, private _userService: UserService) { }

  ngOnInit() {
    this.getActiveUser();
    this.getAllUsers();
  }

  async getActiveUser() {
    let user = await this._loginService.getActiveUserData();
    console.log('user: ', user);
  }

  async getAllUsers() {
    let allUsers = await this._userService.getAllUsers();
    console.log('allUsers: ', allUsers);
  }

}
