import { MockModule } from './mock.module';
import { BrowserModule, By } from '@angular/platform-browser';
import { MockScrollComponent } from './mock-scroll.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('InfinityScrollComponent', () => {
  let component: MockScrollComponent;
  let fixture: ComponentFixture<MockScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, MockModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment list', () => {
    spyOn(component, 'onScrollDown');
    expect(component.array.length).toBe(10);
    const teste: HTMLElement = component.divList.nativeElement;
    console.log(teste.offsetHeight);

    const container: HTMLElement = fixture.debugElement.query(
      By.css('.mock__list'),
    ).nativeElement;

    container.style.height = '200px';
    // scrollTo(expectedLeft, expectedTop);
    // dispatchEvent(scrollEvent);

    fixture.detectChanges();
    fixture.whenStable();

    console.log(container.scrollHeight);

    // container.scroll({
    //   top: 200,
    //   left: 0,
    //   behavior: 'smooth',
    // });

    // expect(component.onScrollDown).toHaveBeenCalled();

    // const container = fixture.debugElement.
  });
});
