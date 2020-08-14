import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    // this.form = this.fb.group({
    //   email: 'tukuanchung@mgmail.com',
    //   password: '123123',
    //   rememberMe: true
    // });

    // this.form = this.fb.group({
    //   email: ['tukuanchung@gmail.com', [Validators.required, Validators.email]],
    //   password: ['123123', [ Validators.required, Validators.minLength(3)]],
    //   rememberMe: true
    // });

    this.form = this.fb.group( {
      email: this.fb.control('tukuanchung@gmail.com', {
          validators : [ Validators.required, Validators.email],
          updateOn: 'blur'
      }),
      password: this.fb.control('123123', {
        validators: [ Validators.required, Validators.minLength(3)]
      }),
      rememberMe: true

    });
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

}
