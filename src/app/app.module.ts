import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';


import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
   	
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule.forRoot([   {path:"home",component:RegisterComponent},
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
