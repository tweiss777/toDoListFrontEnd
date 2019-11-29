
import { Component, OnInit } from '@angular/core';
import {UserService} from '../user-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  
  response: any = [];
  todolists: any = [];

  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.response = this.userService.jsonData;
    // for debugging purposes
    if(this.response == undefined || this.response.length == 0){
      this.router.navigate(['/login'])
    } 
    console.log('from to do list component')
    console.log(this.response);
    
  }


  // Deleite a list a todolist
  deleteList(){
    console.log('delete button pressed');
  // call function from user services
  }

  editListName(){
    console.log("edit list name pressed")
  }

  logout(){
    this.userService.logout();
  }  

}





