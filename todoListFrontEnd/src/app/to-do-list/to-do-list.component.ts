
import { Component, OnInit } from '@angular/core';
import {UserService} from '../user-service.service'
import { Router } from '@angular/router';
import { ListService } from '../list.service';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  
  response: any = [];
  todolists: any = [];

  
  constructor(private userService: UserService,
              private router: Router,
              private listService: ListService) { }

  ngOnInit() {
    this.listService.message = undefined;
    this.response = this.userService.jsonData;
    this.todolists = this.response.todolists;
    // for debugging purposes
    if (this.response == undefined || this.response.length == 0) {
      this.router.navigate(['/login'])
    }
    console.log('from to do list component')
    console.log(this.response);

  }


  deleteList(listName: string, listId: number, index: number) {
    this.listService.message = undefined;
    this.listService.deleteList(listName, listId);
    this.todolists.splice(index, 1);
    
  }

  editListName() {
    console.log('edit list name pressed');
  }




  logout() {
    this.userService.logout();
  }

}





