import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileNav(event: any, navName: any) {
    let i, tabcontent, tablinks;
  }

  //https://www.typescriptlang.org/docs/handbook/dom-manipulation.html

  constructor() { }

  ngOnInit(): void {
  }

}
