import { InfinityScrollComponent } from './../infinity-scroll.component';
import { MockScrollComponent } from './mock-scroll.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [InfinityScrollComponent, MockScrollComponent],
  imports: [CommonModule, InfiniteScrollModule],
})
export class MockModule {}
