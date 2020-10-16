import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { LoginService } from './../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate, CanLoad {
  constructor(private _loginService: LoginService, private _router: Router) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== undefined && token !== null;
  }

  canActivate(): boolean {
    if (this.isAuthenticated()) {
      return true;
    } else {
      this._router.navigateByUrl('login');
      return false;
    }
  }
  canLoad(): boolean {
    if (this.isAuthenticated()) {
      return true;
    } else {
      this._router.navigateByUrl('login');
      return false;
    }
  }
}
