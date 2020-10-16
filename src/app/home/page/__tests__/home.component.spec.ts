import { DataServiceMock } from './data-mock.service';
import { DataService } from './../../../shared/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { AvatarComponent } from './../../../shared/components/avatar/avatar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './../../../shared/components/card/card.component';
import { InfinityScrollComponent } from './../../../shared/components/infinity-scroll/infinity-scroll.component';
import { InputDirective } from './../../../shared/components/input/input.directive';
import { FormGroupComponent } from './../../../shared/components/form-group/form-group.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { users } from '../../../shared/data/users-data';

import { HomeComponent } from '../home.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FormGroupComponent,
        InputDirective,
        InfinityScrollComponent,
        AvatarComponent,
        CardComponent,
      ],
      imports: [
        BrowserModule,
        InfiniteScrollModule,
        FontAwesomeModule,
        HttpClientModule,
      ],
      providers: [{ provide: DataService, useClass: DataServiceMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('should filter', async () => {
    // FILTRAR PELO NOME
    spyOn(component, 'compareName');
    const filterNameBtn: HTMLElement = fixture.debugElement.query(
      By.css('#filter-name'),
    ).nativeElement;

    fixture.detectChanges();

    filterNameBtn.click();

    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.compareName).toHaveBeenCalled();

    // FILTRAR PELA IDADE
    spyOn(component, 'compareAge');
    const filterAgeBtn: HTMLElement = fixture.debugElement.query(
      By.css('#filter-age'),
    ).nativeElement;

    fixture.detectChanges();

    filterAgeBtn.click();

    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.compareAge).toHaveBeenCalled();
  });
});
