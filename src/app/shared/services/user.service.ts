import { LoggedUser } from './logged-user.service';
import { UserEntity } from './../entity/userEntity';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { catchError, map, mapTo } from 'rxjs/operators';
import { users } from '../data/users-data';
import { UserDTO } from './../dto/userDTO';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _httpClient: HttpClient, private loggedUser: LoggedUser) {}

  getUsers(): Observable<UserDTO[]> {
    return this._httpClient.get<UserDTO[]>('/api/?results=50').pipe(
      map((data: any) => data.results as UserDTO[]),
      catchError(this.handleError)
    );
  }

  getOneUser(): Observable<UserDTO> {
    return this._httpClient.get<UserDTO>('/api/?gender=male').pipe(
      map((data: any) => data.results as UserDTO),
      catchError(this.handleError)
    );
  }

  getLogin(): Observable<UserEntity> {
    return this.loggedUser.getLoggedUser().pipe(map((data) => data));
  }

  login(user: string, pass: string): Observable<UserEntity> {
    this.loggedUser.setLoggedUser(null);
    this._httpClient.get<UserEntity>('/api/?gender=male');
    const [userFound] = users.filter(
      (dataUser) => dataUser.login.username === user && dataUser.login.password === pass
    );
    if (userFound) {
      return timer(200).pipe(
        map(() => {
          this.loggedUser.setLoggedUser(userFound);
        }),
        mapTo(userFound)
      );
    } else {
      return timer(200).pipe(mapTo(null));
    }
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
