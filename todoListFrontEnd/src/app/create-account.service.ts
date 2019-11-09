import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor(private http: HttpClient) { }

  // Create Account function
  createAccount(accountform: FormGroup): void {
    console.log("Create Account service activated");
    // endpoint http://127.0.0.1:8000/create_account 
    // tslint:disable-next-line: ban-types
    const apiEndPoint: String = 'http://127.0.0.1:8000/create_account/create_account'




  }


}

