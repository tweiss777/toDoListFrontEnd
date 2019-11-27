import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  // http option used for making api calls
  private httpOptions: any;
  
  // JSON data that is returned from the django rest framework
  public jsonData: any = [];
  // the user related to the token.
  public username: string;
  // error messages recieved from the login attempt
  public errors: any = [];

  constructor(private http: HttpClient,
              private route: Router) { 
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json' })
    }
  }

  public login(user: FormGroup){
    /* 
      We store the values taken from the FormGroup passed in into a dictionary called data
    */
    const data = {
      email : user.get('email').value,
      password : user.get('password').value,
    }

    // HttpClient.post makes the call to our Django API endpoint 
    // Note that in the DRF app the endpoint url is called ../login/.
    this.http.post('http://127.0.0.1:8000/todolist/login',JSON.stringify(data),this.httpOptions).subscribe(
      response => {
        this.jsonData = response; 
      },
      err => {
        this.errors = err;
      }

    );
  }

  public logout(){

  }





}
