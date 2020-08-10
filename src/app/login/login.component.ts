import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy  {

  constructor() { }

  data = {
    email: 'tukuanchung@gmail.com',
    password: 123456,
    rememberMe: false
  };

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

}
