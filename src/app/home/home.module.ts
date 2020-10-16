import { SharedModule } from './../shared/shared.module';
import { DataService } from './../shared/services/data.service';
import { HomeComponent } from './page/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './routing-home.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: [DataService],
})
export class HomeModule {}
