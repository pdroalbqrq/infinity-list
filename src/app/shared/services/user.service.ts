import { UserEntity } from './../entity/user.entity';
import { Injectable } from '@angular/core';
import { UserDTO } from './../dto/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // USUARIO LOGADO
  private _loggedUser: UserEntity;

  constructor() {}

  // RETORNA O USUARIO LOGADO CASO A VARIAVEL TENHA VALOR OU PROCURA NO CACHE
  get user(): UserDTO {
    const localUser = JSON.parse(localStorage.getItem('user'));
    return this._loggedUser ? this._loggedUser : localUser;
  }

  // MUDA O VALOR DO USUARIO LOGADO
  set user(user: UserDTO) {
    this._loggedUser = new UserEntity(user);
  }
}
