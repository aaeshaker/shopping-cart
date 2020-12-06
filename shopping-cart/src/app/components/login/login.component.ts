import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    // e.preventDefault(); //this is used to prevent the default of submit button which is reloading the page
    console.log(this.model);
  }
}
