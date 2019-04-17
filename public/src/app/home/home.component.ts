import { Component, OnInit } from '@angular/core';
import { faBell, faCalendar, faBars, faClipboardList, faBus, faBriefcase, faHome, faCalculator, faUser, faTimesCircle, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../services/login/login.service';

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

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this.getActiveUser();
  }

  async getActiveUser() {
    let test:string = '5cb47207c557e7cf48239e3f';
    let user = await this._loginService.getActiveUserData(test);
  }
  

}
