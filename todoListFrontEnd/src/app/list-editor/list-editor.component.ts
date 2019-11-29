import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-editor',
  templateUrl: './list-editor.component.html',
  styleUrls: ['./list-editor.component.css']
})
export class ListEditorComponent implements OnInit {

  createListForm: FormGroup;
  list_name = "";
  // component for the list editor
  constructor() { }

  ngOnInit() {
    this.createListForm = new FormGroup({
      'list_name': new FormControl(this.list_name,[Validators.required])
    })
  }

  // getter for the list_name
  
  public get listName(){
    return this.createListForm.get('list_name');
  }
  


  createList(){
    console.log("create list button pressed");
    //the implementation should be done in the list service
  }



}
