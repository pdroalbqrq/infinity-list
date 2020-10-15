import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  @HostBinding('class.button')
  private _button = true;
}
