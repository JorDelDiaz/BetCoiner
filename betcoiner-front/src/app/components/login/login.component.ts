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
    this.message = false;
    this.login = false;
    this.textMessage = '';
    this.inputUsername = '';
    this.inputPassword = '';
  }

  validateLogin(): void {
    this.message = true;
    this.user = '{"username" : "' + this.inputUsername + '", "password" : "' + this.inputPassword + '"}';
    if (this.clientService.restCheckUserLogin(JSON.parse(this.user))) {
      this.login = true;
      this.textMessage = '¡Bienvenid@ a BetCoiner!';
    } else {
      this.login = false;
      this.textMessage = 'Usuario o contraseña inválidos';
    }
    setTimeout(() => { this.message = false; }, 2000);
  }
}
