import { InfinityBase } from './../infinity-scroll.class';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-scroll-mock',
  template: `
    <div class="mock__list" #list>
      <app-infinity-scroll [throttle]="throttle" (scrolled)="onScrollDown()">
        <div *ngFor="let person of array">
          <div>name: {{ person.name }}</div>
          <div>last name: {{ person.lastName }}</div>
        </div>
      </app-infinity-scroll>
    </div>
  `,
  styles: ['.mock__list { height: 200px; width: 200px }'],
})
export class MockScrollComponent extends InfinityBase implements OnInit {
  @ViewChild('list', { static: true }) divList: ElementRef;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.addItems();
  }

  get array(): any[] {
    return this._array;
  }
  set array(value: any[]) {
    this._array = value;
  }

  addItems(): void {
    this.generateArray().subscribe((data) => {
      for (let i = 0; i < this.sum; ++i) {
        this.array.push(data[i]);
        this.storeArray.push(data[i]);
      }
    });
  }

  generateArray(): Observable<any[]> {
    const output = 10;
    const array = [];

    for (let i = 0; i <= output; ++i) {
      array.push({ name: this.randonName(6), lastName: this.randonName(6) });
    }

    return of(array);
  }

  randonName(length) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
