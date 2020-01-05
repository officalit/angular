import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { UserAuthenticate } from 'src/app/models/user-authenticate';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      console.log(Create(UserAuthenticate, [this.f.username.value, this.f.password.value]));
      this.authenticationService.login(Create(UserAuthenticate, [this.f.username.value, this.f.password.value]))
            .subscribe(
                (data:any) => {
                    this.router.navigate(['posts']);
                },
                error => {
                    this.error = error.error;
                    this.loading = false;
                    console.log(error)
                });
  }
}

function Create(ctorFunc, ctorArgs) {
  ctorArgs.unshift(null);
  return new (Function.prototype.bind.apply(ctorFunc, ctorArgs ));
}