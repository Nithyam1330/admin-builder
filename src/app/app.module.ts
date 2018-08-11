import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Predefined components
import { AppComponent } from './app.component';

// Predefined Modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';

// fire base modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Custom modules
import {MaterialModule} from './commonModule/material/material.module';

// Custom Components
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { NavigationBarComponent } from './layout/navigation-bar/navigation-bar.component';

// Firebase configuration variable 

var config = {
  apiKey: "AIzaSyABmRTRdyi8bwcd1zUZG5zL_FL-Qs0tZrg",
  authDomain: "admin-tutorial.firebaseapp.com",
  databaseURL: "https://admin-tutorial.firebaseio.com",
  projectId: "admin-tutorial",
  storageBucket: "",
  messagingSenderId: "188334650662"
};

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    NavigationBarComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(config),
	  AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
