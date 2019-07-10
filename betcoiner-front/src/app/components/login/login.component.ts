import { CoinService } from './../../services/coin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private clientService: CoinService) { }

  loginForm: FormGroup;
  inputUsername: string;
  inputPassword: string;
  user: any;
  message: boolean;
  login: boolean;
  textMessage: string;

  ngOnInit() {
    this.textMessage = '';
    this.inputUsername = '';
    this.inputPassword = '';
  }

  async validateLogin(): Promise<void> {
    this.message = true;
    this.user = '{"username" : "' + this.inputUsername + '", "password" : "' + this.inputPassword + '"}';
    if (await this.clientService.restCheckUserLogin(JSON.parse(this.user))) {
      this.login = true;
      this.textMessage = '¡Bienvenid@ a BetCoiner!';
      this.clientService.loginOk();
    } else {
      this.login = false;
      this.textMessage = 'Usuario o contraseña inválidos';
    }
    setTimeout(() => { this.message = false; }, 2000);
  }
}
