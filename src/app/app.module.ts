import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent} from './test/test.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';  

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
   
import {MatSliderModule} from '@angular/material/slider';   
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    ProfileComponent, 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,  
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //HttpModule, 
    MatSliderModule,
    RouterModule,
    MatCardModule, 
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ], exports: [
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
   
