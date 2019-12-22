import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListService } from '../list.service';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.css']
})
export class ItemEditorComponent implements OnInit {
  @Input() listId: number;
  @Input() index: number;
  createItemForm: FormGroup;
  item_name = '';
  constructor(private list_service: ListService,
              private user_service: UserService) { }

  ngOnInit() {
    this.list_service.message = undefined;
    this.createItemForm = new FormGroup({
      'item_name': new FormControl(this.item_name,[Validators.required])
    })

  }


  public get itemName() {return this.createItemForm.get('item_name');}

  createItem(){
    console.log(this.listId);
    const item = this.createItemForm.get('item_name').value;
    console.log("create item button pressed");
    this.list_service.createItem(item,this.listId,this.index);
  }


}
