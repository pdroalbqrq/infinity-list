import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';
import { InfinityScrollComponent } from './infinity-scroll/infinity-scroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HeaderComponent } from './header/header.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [
  WrapperComponent,
  FormGroupComponent,
  HeaderComponent,
  InfinityScrollComponent,
  CardComponent,
  AvatarComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule, InfiniteScrollModule, FontAwesomeModule],
  exports: [...components, FontAwesomeModule],
  providers: [],
})
export class ComponentsModule {}
