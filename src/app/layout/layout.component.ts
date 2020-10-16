import { LoginService } from '../shared/services/login.service';
import { UserDTO } from '../shared/dto/user.dto';
import { UserService } from '../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-main',
  template: `
    <app-header [user]="user" (iconClick)="handleClick()"></app-header>
    <app-wrapper isLogged="true">
      <router-outlet></router-outlet>
    </app-wrapper>
  `,
})
export class AppLayoutComponent implements OnInit {
  user: UserDTO;
  constructor(
    private _userService: UserService,
    private _loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.user = this._userService.user;
  }

  handleClick() {
    this._loginService.logout();
  }
}
