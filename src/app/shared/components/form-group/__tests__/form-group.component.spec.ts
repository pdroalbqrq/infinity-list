import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormGroupComponent } from '../form-group.component';

describe('FormGroupComponent', () => {
  let component: FormGroupComponent;
  let fixture: ComponentFixture<FormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check label text value', () => {
    expect(component).toBeTruthy();

    const label: HTMLElement = fixture.debugElement.query(
      By.css('.form-group__label'),
    ).nativeElement;
    expect(label.textContent).toContain('Undefined');

    component.label = 'Name';

    fixture.detectChanges();

    expect(label.textContent).toContain('Name');
  });

  it('should check label for value', () => {
    component.for = 'labelId';

    fixture.detectChanges();

    const label: HTMLElement = fixture.debugElement.query(
      By.css('[for="labelId"]'),
    ).nativeElement;

    expect(label).toBeDefined();
  });
});
