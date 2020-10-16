import { UserDTO } from './../../dto/user.dto';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faSignOutAlt = faSignOutAlt;
  private _user: UserDTO;
  @Output() iconClick = new EventEmitter<null>();

  @Input()
  get user(): UserDTO {
    return this._user;
  }
  set user(value: UserDTO) {
    this._user = value;
  }

  handleClick(event) {
    this.iconClick.emit(null);
  }
}
