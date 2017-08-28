import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {By} from "@angular/platform-browser";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render user list with 3 elements', async(() => {
    const users = ["Foo", "Bar", "Baz"];

    const debugElements = fixture.debugElement.queryAll(By.css('#user-list li'));
    expect(debugElements[0].nativeElement.textContent).toContain(users[0]);
    expect(debugElements[1].nativeElement.textContent).toContain(users[1]);
    expect(debugElements[2].nativeElement.textContent).toContain(users[2]);
  }));
});
