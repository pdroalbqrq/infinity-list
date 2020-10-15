import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {
  @HostBinding('class.form-group__input')
  private _input = true;
}
