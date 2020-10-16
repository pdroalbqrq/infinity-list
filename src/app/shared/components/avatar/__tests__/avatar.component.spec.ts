import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarComponent } from '../avatar.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();

    component.img = 'https://www.w3schools.com/html/img_girl.jpg';

    fixture.detectChanges();

    const img = fixture.debugElement.query(
      By.css('[src="https://www.w3schools.com/html/img_girl.jpg"]'),
    ).nativeElement;

    expect(component.img).toBe('https://www.w3schools.com/html/img_girl.jpg');
    expect(img).toBeDefined();
  });
});
