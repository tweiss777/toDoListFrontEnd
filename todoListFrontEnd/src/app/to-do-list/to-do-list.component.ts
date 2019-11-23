import { Component, OnInit } from '@angular/core';
import {UserService} from '../user-service.service'
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor(userService: UserService) { }
  todolist: any = [];
  ngOnInit() {
    this.todolist = this.retrievelist();
  }

edit(){
  console.log('edit button pressed');
  // call function from user services
}


delete(){
  console.log('delete button pressed');
// call function from user services
}

create_todoItem(){
  console.log('create item button pressed');
  // call function from user services
}

// should be called in nginit
retrievelist(){
  console.log("retrieve list triggered")
}

}





