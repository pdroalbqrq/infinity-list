import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  private _img: string;
  constructor() {}

  ngOnInit(): void {}

  @Input()
  get img(): string {
    return this._img;
  }
  set img(value: string) {
    this._img = value;
  }
}
