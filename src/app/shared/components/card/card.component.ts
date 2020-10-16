import { UserDTO } from './../../dto/user.dto';
import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  faHeart = faHeart;
  private _user: UserDTO;

  constructor() {}

  ngOnInit(): void {}

  @Input()
  get user(): UserDTO {
    return this._user;
  }
  set user(value: UserDTO) {
    this._user = value;
  }
}
