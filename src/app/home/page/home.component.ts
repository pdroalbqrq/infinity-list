import { LoggedUser } from './../../shared/services/logged-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private loggedUser: LoggedUser) {}

  ngOnInit(): void {
    this.loggedUser.getLoggedUser().subscribe((data) => {
      console.log(data);
    });
  }
}
