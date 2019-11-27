
import { Component, OnInit } from '@angular/core';
import {UserService} from '../user-service.service'
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor(private userService: UserService) { }
  response: any = [];

  ngOnInit() {
    this.response = this.userService.jsonData;
    // for debugging purposes 
    console.log(this.response);
  }

  createList(){
    console.log('create list button added');
  }

  delete(){
    console.log('delete button pressed');
  // call function from user services
  }

  // should be called in nginit
  

}





