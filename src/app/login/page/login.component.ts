import {
  Observable,
  ReplaySubject,
  Subject,
  Subscriber,
  Subscription,
} from 'rxjs';
import { UserEntity } from '../../shared/entity/user.entity';
import { UserDTO } from '../../shared/dto/user.dto';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../shared/services/login.service';
import { Router } from '@angular/router';
import { map, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private _loginForm: FormGroup;
  private _error = false;
  private _isLoading: boolean;
  private _$destroy: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private _formbuilder: FormBuilder,
    private _loginService: LoginService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this._formbuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get loginForm(): FormGroup {
    return this._loginForm;
  }

  set loginForm(form: FormGroup) {
    this._loginForm = form;
  }

  get error(): boolean {
    return this._error;
  }

  set error(value: boolean) {
    this._error = value;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
    this._isLoading = value;
  }

  // CHAMA O METODO DE LOGIN DO SERVICE LoginService
  handleSubmit(form): void {
    this.isLoading = true;

    // Usuário e senha válidos
    // 'redbutterfly553', '123456'

    this._loginService
      .login(form.value.user, form.value.password)
      .pipe(takeUntil(this._$destroy))
      .subscribe(
        () => {},
        (err) => (this.error = true),
        () => (this.isLoading = false),
      );

    this.loginForm.valueChanges
      .pipe(takeUntil(this._$destroy))
      .subscribe(() => {
        this.error = false;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this._$destroy.next(true);
    this._$destroy.unsubscribe();
  }
}
