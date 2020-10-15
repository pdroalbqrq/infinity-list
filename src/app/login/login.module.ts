import { LoggedUser } from './../shared/services/logged-user.service';
import { UserService } from './../shared/services/user.service';
import { SharedModule } from './../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule, ReactiveFormsModule],
  providers: [UserService, LoggedUser]
})
export class LoginModule {}
