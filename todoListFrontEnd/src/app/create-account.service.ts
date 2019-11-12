import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {
  params: HttpParams;
  apiEndpoint: string = 'http://127.0.0.1:8000/todolist/create_account';
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // Create Account function
  createAccount(accountform: FormGroup){
    console.log("Create Account service activated");
    // endpoint http://127.0.0.1:8000/todolist/create_account
    const jsonData = {
      first_name: accountform.get('first_name').value,
      last_name: accountform.get('last_name').value,
      email: accountform.get('email').value,
      password: accountform.get('password').value,
    }
    const headers = new HttpHeaders()
    headers.append('Content-Type','application/json')

    return this.http.post(this.apiEndpoint, jsonData, {headers} ).subscribe(response => {console.log(response)});

  }


}

