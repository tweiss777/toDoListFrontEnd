import { UserService } from './user-service.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {HttpClient,
  HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private httpOptions: any;
  public message: any;
  constructor(
    private http: HttpClient,
    private route: Router,
    private user_service: UserService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders(
        {'Content-Type': 'application/json'}
        )
    };
  }

  createList(listName: string, userID: number) {
    console.log('creating list');
    console.log(listName,userID);
    // Params to pass into the api endpoint.
    const params = {
      list_name: listName,
      user_id: userID,
    };
    this.http.post('http://127.0.0.1:8000/todolist/create_list', JSON.stringify(params),this.httpOptions).toPromise().then(response =>{
      this.message = response['message'];
      this.user_service.jsonData.todolists.push(
        {
          list_name: listName,
          user_id: userID,
          list_items: []
        }
        );
      }
    )
  }

  deleteList(listName: string, listId: number){
    console.log('delete list service triggered');
    const params = {
      list_name: listName,
      list_id: listId,
    };

    this.http.post('http://127.0.0.1:8000/todolist/delete_list', JSON.stringify(params),this.httpOptions).toPromise().then( response => {
      this.message = response['message'];

    })


  }

  // retrieveLists(userId: number) {
  //   const params = {
  //     user_id: userId,
  //   };

  //   this.http.post('http://127.0.0.1:8000/todolist/retrievelists', JSON.stringify(params),this.httpOptions).toPromise().then(response => {
      
  //   });
  // }
}
