import { Component, Input, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router} from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      loginId: new FormControl(),
      password: new FormControl()
    });
  }

  doLogin() {
    const inputLoginId: string = this.loginForm.controls.loginId.value;
    const inputPassword: string = this.loginForm.controls.password.value;

    console.log("loginId -> " + inputLoginId);
    console.log("password -> " + inputPassword);

    // go to list page
    this.router.navigate(["list"]);
  }
}
