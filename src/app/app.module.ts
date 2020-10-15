import { UserService } from './shared/services/user.service';
import { InterceptorModule } from './shared/auth/interceptor.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggedUser } from './shared/services/logged-user.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule, InterceptorModule],
  providers: [UserService, LoggedUser],
  bootstrap: [AppComponent]
})
export class AppModule {}
