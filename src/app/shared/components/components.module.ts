import { InfinityScrollComponent } from './infinity-scroll/infinity-scroll.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { WrapperComponent } from './wrapper/wrapper.component';
import { NgModule } from '@angular/core';

const components = [WrapperComponent, FormGroupComponent, InfinityScrollComponent];

@NgModule({
  declarations: components,
  exports: [...components, ScrollingModule],
  imports: [ScrollingModule],
  providers: []
})
export class ComponentsModule {}
