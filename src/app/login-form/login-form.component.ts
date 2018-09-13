import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService} from '../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) { }


    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
        
      })
    }
  
    // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login(){
    console.log("login ... ");
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Form Values: " + this.f.username.value + " " +  this.f.password.value);
      this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe((response:any) => {
        console.log(response.response);
        this.router.navigate(['login']);
      }), error => {
        console.log(error);
        console.log(" username and password are incorrect ");
  }
  }
  }

  
}