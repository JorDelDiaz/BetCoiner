import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient, private router: Router) { }

  private remoteUrl = 'http://localhost:8080';
  restCheckUserLogin(user: any): boolean {
    this.http.post(this.remoteUrl + '/api/auth/signin', user).subscribe(
      (result: any) => {
        localStorage.setItem('token', result.accessToken);
        localStorage.setItem('role', result.authorities[0].authority);

        if (result.authorities[0].authority === 'ROLE_ADMIN') {
        } else {
        }
        console.log(true);
        return true;
      },
      error => {
        console.log(false);
        return false;
      }
    );
    return null;
  }
}
