import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
  private _isLogged: boolean;
  classes = ['wrapper'];

  @Input()
  get isLogged(): boolean {
    return this._isLogged;
  }
  set isLogged(value) {
    if (this.primitiveToBoolean(value)) {
      this.classes.push('isLoggedHeader');
    }
    this._isLogged = value;
  }

  // METODO QUE TRANSFORMA VALOR EM BOOLEAN
  primitiveToBoolean(
    value: string | number | boolean | null | undefined,
  ): boolean {
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true' || !!+value;
    }

    return !!value;
  }
}
