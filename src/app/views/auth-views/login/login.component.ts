// Predefined
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
// Custom Services
import { LoginService } from './login.service';
import { AppLoaderService } from '../../../commonModule/app-loader/app-loader.service';
import { AuthService } from '../../../services/auth.service';

// Importing Custom Model

import { Login } from './login.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj: Login;
  isError: boolean = false;
  hide: boolean = true;
  
  loginValidators: {
    passwordFormControl: FormControl,
    usernameFormControl: FormControl
  } = {
    passwordFormControl: new FormControl('',[
      Validators.required
    ]),
    usernameFormControl: new FormControl('', [
      Validators.required
    ])
  }
  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, private loginService: LoginService,
    private appLoaderService: AppLoaderService,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuthenticated = false;
    this.loginObj = new Login();
    this.loginObj.password = "123456";
    this.loginObj.username = "admin"
  }
  login() {
    if (this.loginValidators.passwordFormControl.valid && this.loginValidators.usernameFormControl.valid) {
      this.appLoaderService.open();
      this.loginObj.username = this.loginValidators.usernameFormControl.value;
      this.loginObj.password = this.loginValidators.passwordFormControl.value;
      this.loginService.getLoginData(this.loginObj);
      this.loginService.getIsError().subscribe(res => {
        this.appLoaderService.close();
        this.isError = res;
      });
    } else {
    }
  }
}
