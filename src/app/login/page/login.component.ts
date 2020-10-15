import { Observable, Subject } from 'rxjs';
import { UserEntity } from '../../shared/entity/user.entity';
import { UserDTO } from '../../shared/dto/user.dto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private _loginForm: FormGroup;
  private _user: UserDTO;
  private _error: boolean;
  private _isLoading: boolean;

  constructor(
    private _formbuilder: FormBuilder,
    private _userService: UserService,
    private router: Router,
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

  handleSubmit(form): void {
    this.isLoading = true;
    // 'redbutterfly553', 'cuervo'
    this._userService.login(form.value.user, form.value.password).subscribe(
      (data) => {
        if (data) {
          this.error = false;
          this._user = data;
          localStorage.setItem('token', data.login.sha1);
          this.router.navigate(['/home']);
        } else {
          this.error = true;
        }
      },
      (err) => err,
      () => (this.isLoading = false),
    );

    this.loginForm.valueChanges.subscribe(() => {
      this.error = false;
    });
  }

  onScroll(): void {
    console.log('teste');
  }
}
