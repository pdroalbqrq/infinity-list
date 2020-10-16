import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormGroupComponent {
  private _label = 'Undefined';
  private _forLabel: string;

  @Input()
  get label(): string {
    return this._label;
  }
  set label(value: string) {
    this._label = value;
  }

  @Input()
  get for(): string {
    return this._forLabel;
  }
  set for(value: string) {
    if (!value) {
      console.error('Label precisa de uma referência');
    }
    this._forLabel = value;
  }

  @HostBinding('class.form-group') private formGroup = true;
}
