import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit, OnDestroy {

  form: FormGroup;

  data = {
    email: 'will.huang@miniasp.com',
    pwds: [
      {
        password: '1111',
        rememberMe: true
      },
      {
        password: '222',
        rememberMe: false
      },
      {
        password: '222',
        rememberMe: false
      }
    ]
  };

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
      // password: this.fb.control('123123', {
      //   validators: [ Validators.required, Validators.minLength(3)]
      // }),
      // rememberMe: true
      pwds: this.fb.array([])

    });
    this.resetForm();
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  fa(name: string) {
    return this.form.get(name) as FormArray;
  }


  addNewPwd() {
    this.fa('pwds').push(this.fb.group({
      password: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      rememberMe: true
    }));
  }

  resetForm() {
    this.fa('pwds').clear();

    const len = this.data.pwds.length;
    for (let index = 0; index < len; index++) {
      this.fa('pwds').push(this.fb.group({
        password: this.fb.control('', {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        rememberMe: true
      }));
    }

    this.form.reset(this.data);
  }
}
