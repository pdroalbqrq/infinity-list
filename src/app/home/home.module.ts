import { LoggedUser } from './../shared/services/logged-user.service';
import { HomeComponent } from './page/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './routing-home.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
  providers: [LoggedUser]
})
export class HomeModule {}
