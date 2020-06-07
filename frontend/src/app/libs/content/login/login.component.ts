import { Component, Input, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router} from '@angular/router';
import { LoginApiService } from 'frontend/src/app/libs/service/login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private loginApi: LoginApiService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      loginId: new FormControl(),
      password: new FormControl()
    });
  }

  doLogin() {

    // 画面で入力したログインIDとパスワードを取得
    const inputLoginId: string = this.loginForm.controls.loginId.value;
    const inputPassword: string = this.loginForm.controls.password.value;

    console.log('loginId -> ' + inputLoginId);
    console.log('password -> ' + inputPassword);

    if(this.loginApi.isAllowLogin(inputLoginId, inputPassword)) {
      // ログイン成功、次のページへ遷移する
      this.router.navigate(['engineer-list']);
    }

    // go to list page
    this.router.navigate(["engineer-list"]);
  }
}
