import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { users } from '../data/users-data';
import { UserDTO } from '../dto/user.dto';
import { UserService } from './user.service';

@Injectable()
export class LoginService {
  // VARIAVEL PRIVADA PARA OUVIR SE UM USUARIO ESTÁ LOGADO
  private _loggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private _httpClient: HttpClient,
    private userService: UserService,
    private _router: Router,
  ) {}

  // GET DA VARIAVEL PRIVADA RETORNANDO UM OBSERVABLE
  get isLoggedIn(): Observable<boolean> {
    return this._loggedIn.asObservable();
  }

  // GET DA VARIAVEL PRIVADA MUDANDO O VALOR (BOOLEAN)
  set isLogged(flag: boolean) {
    this._loggedIn.next(flag);
  }

  // METODO PARA PROCURAR O USUARIO A PARTIR DOS PAREMETOS
  // E CASO EXISTA INSERE NO localStorage, (só usei o localStorage
  // por não precisar de segurança, mas sei que o ideal é um banco de dados de cache)
  // ALTERA O VALOR DO USUARIO NO SERVICE UserService
  // E ALTERA O VALOR DA VARIAVEL PRIVADA DE FALSE PRA TRUE
  // PERMITINDO O USUARIO ENTRAR E REDIRECIONANDO PARA A ROTA DE LOGIN
  login(user: string, pass: string): Observable<boolean> {
    const [userFound] = users.filter(
      (dataUser) =>
        dataUser.login.username === user && dataUser.login.password === pass,
    );
    return of(userFound).pipe(
      delay(1000),
      map((resultApi) => {
        if (resultApi) {
          this.userService.user = resultApi;

          localStorage.setItem('user', JSON.stringify(this.userService.user));
          localStorage.setItem('token', resultApi.login.sha1);
          this.isLogged = true;
          this._router.navigate(['/home']);
          return true;
        } else {
          throw new Error('Usuário não encontrado');
        }
      }),
    );
  }

  get router(): Router {
    return this._router;
  }

  // METODO PARA DESLOGAR O USUARIO REMOVENDO DO LOCALSTORAGE
  // ALTERA O VALOR DA VARIAVEL PRIVADA PARA FALSE
  // E REDIRECIONA PARA A TELA DE LOGIN
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLogged = false;
    this.router.navigate(['/login']);
  }
}
