import { element } from 'protractor';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.component.html',
  styleUrls: ['./infinity-scroll.component.scss']
})
export class InfinityScrollComponent implements OnInit, AfterViewInit {
  private observer: IntersectionObserver;
  @Input() options = {};
  @Output() scrolled = new EventEmitter();
  @ViewChild('anchor', { static: false }) anchor: ElementRef<HTMLElement>;

  constructor(private host: ElementRef) {}

  ngAfterViewInit(): void {
    console.log(this.anchor);
    this.observer.observe(this.anchor.nativeElement);
  }

  ngOnInit(): void {
    const options = {
      root: this.isHostScrollable() ? this.element : null,
      ...this.options
    };

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    }, options);
  }

  get element(): HTMLElement {
    const el: HTMLElement = this.host.nativeElement;
    return el;
  }

  private isHostScrollable(): boolean {
    const style = window.getComputedStyle(this.element);

    return style.getPropertyValue('overflow') === 'auto' || style.getPropertyValue('overflow-y') === 'scroll';
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
