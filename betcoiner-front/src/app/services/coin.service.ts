import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  isAdmin: boolean;

  constructor(private http: HttpClient, private router: Router) { }

  private remoteUrl = 'http://localhost:8080';

  restCheckUserLogin(user: any): Promise<boolean> {
    return this.http.post(this.remoteUrl + '/api/auth/signin', user).toPromise().then(
      (result: any) => {

        localStorage.setItem('token', result.accessToken);
        localStorage.setItem('role', result.authorities[0].authority);

        if (result.authorities[0].authority === 'ROLE_ADMIN') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
        return true;
      },
      error => {
        this.isAdmin = false;
        return false;
      }
    );
  }

  loginOk() {
    this.router.navigateByUrl('dashboard');
  }

}
