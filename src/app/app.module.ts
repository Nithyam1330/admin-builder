// Predefined Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

// Custom Service
import {AppLoaderService} from './commonModule/app-loader/app-loader.service';

// Custom Components
import { AppComponent } from './app.component';
import {AppLoaderComponent} from './commonModule/app-loader/app-loader.component';
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
    NavigationBarComponent,
    AppLoaderComponent
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
  providers: [AppLoaderService],
  bootstrap: [AppComponent],
  entryComponents: [AppLoaderComponent]
})
export class AppModule { }
