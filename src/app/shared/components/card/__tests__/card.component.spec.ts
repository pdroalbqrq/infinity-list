import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from '../card.component';
import { AvatarComponent } from './../../avatar/avatar.component';
import { users } from '../../../data/users-data';
import { Component } from '@angular/core';

describe('CardComponent', () => {
  let component: MockCard;
  let fixture: ComponentFixture<MockCard>;

  @Component({
    selector: 'app-card-mock',
    template: `<app-card
      *ngFor="let user of userMock"
      [user]="user"
    ></app-card>`,
  })
  class MockCard {
    userMock = users;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, AvatarComponent, MockCard],
      imports: [BrowserModule, FontAwesomeModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
