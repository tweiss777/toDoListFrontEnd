import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListService } from '../list.service';
import { UserService } from '../user-service.service';



@Component({
  selector: 'app-list-editor',
  templateUrl: './list-editor.component.html',
  styleUrls: ['./list-editor.component.css']
})
export class ListEditorComponent implements OnInit {

  createListForm: FormGroup;
  list_name = '';
  // component for the list editor
  constructor(private list_service: ListService,
              private user_service: UserService
              ) { }

  ngOnInit() {
    this.list_service.message = undefined;
    this.createListForm = new FormGroup({
      'list_name': new FormControl(this.list_name, [Validators.required])
    })
  }

  // getter for the list_name
  
  public get listName(){
    return this.createListForm.get('list_name');
  }
  


  createList(){
    this.list_service.createList(this.createListForm.get('list_name').value, this.user_service.jsonData.user_id);


  }



}
