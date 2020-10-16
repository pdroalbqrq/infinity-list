import { By } from '@angular/platform-browser';
import { UserService } from './../../../services/user.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from '../header.component';
import { users } from '../../../data/users-data';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [FontAwesomeModule],
      providers: [UserService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with user', () => {
    expect(component).toBeDefined();
    const userData = users[0];

    component.user = userData;

    expect(component.user).toBe(userData);
  });

  it('should emit click event', async () => {
    spyOn(component.iconClick, 'emit');

    const button: HTMLElement = fixture.debugElement.query(
      By.css('.main-header__logout'),
    ).nativeElement;

    button.click();

    fixture.detectChanges();

    expect(component.iconClick.emit).toHaveBeenCalled();
  });
});
