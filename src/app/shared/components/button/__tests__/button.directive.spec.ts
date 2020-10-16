import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonDirective } from '../button.directive';

describe('ButtonDirective', () => {
  @Component({
    selector: 'app-mock-directive',
    template: `<button type="button" appButton></button>`,
  })
  class MockDirective {}

  let component: MockDirective;
  let fixture: ComponentFixture<MockDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MockDirective, ButtonDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add class button', () => {
    expect(component).toBeDefined();

    const input = fixture.debugElement.query(By.css('.button')).nativeElement;

    expect(input).toBeDefined();
  });
});
