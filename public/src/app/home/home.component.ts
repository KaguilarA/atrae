import { Component, OnInit } from '@angular/core';
import { faBell, faCalendar, faBars, faClipboardList, faBus, faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faHome = faHome;
  faClipboardList = faClipboardList;
  faBus = faBus;
  faBriefcase = faBriefcase;
  faBell = faBell;
  faCalendar = faCalendar;
  faBars = faBars;

  constructor() { }

  ngOnInit() {
  }
  

}
