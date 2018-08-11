// Predefined
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Custom Services
import { LoginService } from './login.service';

// Importing Custom Model

import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj: Login;
  isError: boolean = false;
  hide: boolean = true;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.loginObj = new Login();
    this.loginObj.password = "123456";
    this.loginObj.username = "admin"
  }
  login() {
    this.loginService.getLoginData(this.loginObj);
    this.loginService.getIsError().subscribe(res => {
      console.log(res);
      this.isError = res;
    });
  }
}
