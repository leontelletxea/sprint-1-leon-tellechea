import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';


const router: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component:  HomeComponent},
  { path: '', redirectTo:  "/home", pathMatch: "full"},
  { path: 'quien-soy', component:  QuienSoyComponent}
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(router)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
