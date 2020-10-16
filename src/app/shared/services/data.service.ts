import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { UserDTO } from '../dto/user.dto';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _httpClient: HttpClient) {}

  // RETORNA 10 USUARIOS
  getUsers(): Observable<UserDTO[]> {
    return this._httpClient.get<UserDTO[]>(`/api/?results=10`).pipe(
      retry(3),
      map((data: any) => data.results as UserDTO[]),
      catchError(this.handleError),
    );
  }

  // RETORNA UM USUARIO DA API RANDOM USERS
  getOneUser(): Observable<UserDTO> {
    return this._httpClient.get<UserDTO>('/api/?gender=male').pipe(
      retry(3),
      map((data: any) => data.results as UserDTO),
      catchError(this.handleError),
    );
  }

  // METODO PARA TRATAR ERRO DE UMA REQUISIÇÃO
  handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
