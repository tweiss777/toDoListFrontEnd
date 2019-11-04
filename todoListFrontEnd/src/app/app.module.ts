import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
   {path: '',redirectTo: 'login', pathMatch: 'full'}, // Redirects the user to the login component.
   {path: 'login', component: LoginComponent}, //Route for the login component
   {path: 'create_account', component: CreateAccountComponent}, // route for the create account component

];

@NgModule({
   // this is where your components get registered
   declarations: [
      AppComponent,
      LoginComponent,
      CreateAccountComponent,
      
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes)
      
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})


export class AppModule { }
