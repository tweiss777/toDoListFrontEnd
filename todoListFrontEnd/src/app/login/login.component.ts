import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  // The selector shows you how the component should be called in html
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  // Email and password fields
  user: User = {
    email: '',
    password: '',
  };
  error: string;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(this.user.email,[Validators.required,Validators.pattern('^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})')]),
      'password': new FormControl(this.user.password,[Validators.required])
    });
  }

  //#region getters methods
  get email(){
    return this.loginForm.get('email');
  }
  
  get password(){
    return this.loginForm.get('password');
  }

  //#endregion

  // login button
  login() {
    // send username and password into a post request to the server.    
    console.log("Login button pressed");
    this.userService.login(this.loginForm);
    console.log(this.userService.jsonData);
    if(this.userService.jsonData['user_id']){
      this.router.navigate(['/todolist']);
    }
    else{
      this.error = "Invalid Username or password";
    }
  }
  
}