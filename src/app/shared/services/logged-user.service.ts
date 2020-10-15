import { UserEntity } from '../entity/user.entity';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class LoggedUser {
  private _user = new Subject<UserEntity>();

  setLoggedUser(value: UserEntity): void {
    this._user.next(value);
  }

  getLoggedUser(): Observable<UserEntity> {
    return this._user.asObservable();
  }
}
