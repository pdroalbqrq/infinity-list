import { UserDTO } from './../../../shared/dto/user.dto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { users } from '../../../shared/data/users-data';

@Injectable({
  providedIn: 'root',
})
export class DataServiceMock {
  constructor(private _httpClient: HttpClient) {}

  getUsers(): Observable<UserDTO[]> {
    return of(users);
  }
}
