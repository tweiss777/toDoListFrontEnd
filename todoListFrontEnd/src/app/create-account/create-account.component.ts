import { Component, OnInit } from '@angular/core';
import { Account } from './../models/Account';

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

  constructor() { }

  ngOnInit() {
  }

  // used for debugging purposes
  printToConsole(): void{
    console.log(this.newAccount.first_name)
    console.log(this.newAccount.last_name)
    console.log(this.newAccount.email)
    console.log(this.newAccount.password)
  }

}
