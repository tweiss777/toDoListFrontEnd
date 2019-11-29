import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { ListEditorComponent } from './list-editor/list-editor.component';



const routes: Routes = [
   {path: '',redirectTo: 'login', pathMatch: 'full'}, // Redirects the user to the login component.
   {path: 'login', component: LoginComponent}, //Route for the login component
   {path: 'create_account', component: CreateAccountComponent}, // route for the create account component
   {path: 'todolist', component: ToDoListComponent}, // route for the todo-list 
   {path: 'listeditor', component: ListEditorComponent} // route for the list editor
];

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      CreateAccountComponent,
      ToDoListComponent,
      ListEditorComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   
})


export class AppModule { }
