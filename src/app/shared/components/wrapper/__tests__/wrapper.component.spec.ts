import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperComponent } from '../wrapper.component';

describe('WrapperComponent', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create without header', () => {
    expect(component).toBeDefined();
  });

  it('should create with header', () => {
    component.isLogged = true;

    expect(component.classes.includes('isLoggedHeader')).toBe(true);
  });
});
