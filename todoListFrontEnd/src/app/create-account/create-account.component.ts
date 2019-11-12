import { CreateAccountService } from './../create-account.service';
import { Component, OnInit } from '@angular/core';
import { Account } from './../models/Account';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  
  newAccount: Account = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };

  createAccountForm: FormGroup;

  constructor(private cas: CreateAccountService) { }

  ngOnInit() {
    {
      this.createAccountForm = new FormGroup({
        'first_name': new FormControl(this.newAccount.first_name,[Validators.required, Validators.minLength(2)]),
        
        'last_name': new FormControl(this.newAccount.last_name,[Validators.required, Validators.minLength(2)]),
        
        'email': new FormControl(this.newAccount.email,[Validators.required,Validators.pattern('^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})')]),
        
        'password': new FormControl(this.newAccount.password,[Validators.required,Validators.minLength(6)])
      },
        
      );
    }
  }
  //#region getters
  get first_name(){
    return this.createAccountForm.get('first_name');
  }

  get last_name(){
    return this.createAccountForm.get('last_name');
  }

  get email(){
    return this.createAccountForm.get('email');
  }

  get password(){
    return this.createAccountForm.get('password');
  }

  // #endregion
  // Function used for debugging purposes
  printToConsole(){
    console.log(this.createAccountForm.get('first_name').value);
  }

  // This function
  createAccount() {
    // not working
    this.cas.createAccount(this.createAccountForm);
  }


}
