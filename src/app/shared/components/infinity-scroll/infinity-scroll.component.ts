import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.component.html',
  styleUrls: ['./infinity-scroll.component.scss'],
})
export class InfinityScrollComponent implements OnInit {
  private _throttle: number;
  @Output() scrolled = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  @Input()
  get throttle(): number {
    return this._throttle;
  }
  set throttle(value: number) {
    this._throttle = value;
  }

  onScrollDown() {
    this.scrolled.emit();
  }
}
