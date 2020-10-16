import { UserService } from './../../shared/services/user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule, By } from '@angular/platform-browser';
import { WrapperComponent } from './../../shared/components/wrapper/wrapper.component';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLayoutComponent } from '../layout.component';
import { HeaderComponent } from './../../shared/components/header/header.component';
import { LoginService } from './../../shared/services/login.service';
import { Component } from '@angular/core';
import { UserDTO } from 'src/app/shared/dto/user.dto';
import { Router } from '@angular/router';

describe('LayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;
  let service: UserService;

  @Component({
    selector: 'app-mock',
    template: '<div></div>',
  })
  class MockHomeClass {}

  @Component({
    selector: 'app-mock',
    template: '<div></div>',
  })
  class MockLoginClass {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppLayoutComponent,
        MockHomeClass,
        MockLoginClass,
        HeaderComponent,
        WrapperComponent,
      ],
      imports: [
        BrowserModule,
        FontAwesomeModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: AppLayoutComponent,
            children: [
              { path: '', redirectTo: 'home', pathMatch: 'full' },
              { path: 'home', component: MockHomeClass },
              { path: 'login', component: MockLoginClass },
            ],
          },
        ]),
        HttpClientModule,
      ],
      providers: [LoginService, UserService],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.inject(UserService);
    fixture = TestBed.createComponent(AppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check user', () => {
    const user: UserDTO = service.user;
    expect(component).toBeDefined();

    fixture.detectChanges();

    expect(component.user).toBe(user);
  });

  it('should logout', async () => {
    spyOn(component, 'handleClick');

    fixture.detectChanges();
    await fixture.whenStable();

    const logOutButton: HTMLElement = fixture.debugElement.query(
      By.css('.main-header__logout'),
    ).nativeElement;

    logOutButton.click();

    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.handleClick).toHaveBeenCalled();
    expect(component.user).toBe(null);
  });
});
