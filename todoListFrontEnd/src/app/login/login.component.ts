import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  // The selector shows you how the component should be called in html
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Email and password fields
  user: User = {
    email: '',
    password: '',
  };


  constructor() { }

  ngOnInit() {
    
  }

  // login button
  loginBtn():void{
    // send username and password into a post request to the server.

  }
  

}
