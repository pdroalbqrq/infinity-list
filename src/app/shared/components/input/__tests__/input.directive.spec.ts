import { InputDirective } from './../input.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('WrapperComponent', () => {
  @Component({
    selector: 'app-mock-directive',
    template: `<input type="text" appInput />`,
  })
  class MockDirective {}
  let component: MockDirective;
  let fixture: ComponentFixture<MockDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MockDirective, InputDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add class form-group__input', () => {
    expect(component).toBeDefined();

    const input = fixture.debugElement.query(By.css('.form-group__input'))
      .nativeElement;

    expect(input).toBeDefined();
  });
});
