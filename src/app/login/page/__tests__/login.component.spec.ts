import { LoginService } from './../../../shared/services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormGroupComponent } from './../../../shared/components/form-group/form-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputDirective } from './../../../shared/components/input/input.directive';
import { ButtonDirective } from './../../../shared/components/button/button.directive';
import { WrapperComponent } from './../../../shared/components/wrapper/wrapper.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from '../login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { format } from 'path';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  LoginService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        WrapperComponent,

        ButtonDirective,
        InputDirective,
        FormGroupComponent,
      ],
      imports: [
        BrowserModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        HttpClientModule,
      ],
      providers: [LoginService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should login', async (done) => {
    const loginService = TestBed.inject(LoginService);
    expect(component).toBeTruthy();
    const form = component.loginForm;
    expect(component.error).toBe(false);

    const submitButton: HTMLElement = fixture.debugElement.query(
      By.css('.button'),
    ).nativeElement;

    // USUARIO INVÁLIDO
    form.patchValue({ user: 'rasd123rfly553', password: 'aasdsa' });

    fixture.detectChanges();

    submitButton.click();

    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.error).toBe(true);

    // USUARIO EXISTENTE
    form.patchValue({ user: 'redbutterfly553', password: '123456' });

    fixture.detectChanges();

    loginService.isLoggedIn.subscribe((isLogged) => {
      expect(isLogged).toBe(true);
      done();
    });
  });
});
