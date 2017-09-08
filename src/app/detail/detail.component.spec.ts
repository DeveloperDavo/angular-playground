import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DetailComponent} from './detail.component';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {DebugElement} from '@angular/core';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should edit user\'s details', fakeAsync(() => {
    component.user = {id: 0, name: 'Bob', username: 'Bobby', email: 'bobby@gmail.com', phone: '1234'};

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const inputNameEl = fixture.debugElement.query(By.css('#input-name')).nativeElement;
    updateInputField(inputNameEl, 'Tom');

    const inputUsernameEl = fixture.debugElement.query(By.css('#input-username')).nativeElement;
    updateInputField(inputUsernameEl, 'Tommy');

    const inputEmailEl = fixture.debugElement.query(By.css('#input-email')).nativeElement;
    updateInputField(inputEmailEl, 'tommy@gmail.com');

    const inputPhoneEl = fixture.debugElement.query(By.css('#input-phone')).nativeElement;
    updateInputField(inputPhoneEl, '5678');

    const user = component.user;
    expect(user.name).toBe('Tom');
    expect(user.username).toBe('Tommy');
    expect(user.email).toBe('tommy@gmail.com');
    expect(user.phone).toBe('5678');
  }));

  function updateInputField(element: any, inputValue: string) {
    element.value = inputValue;
    const event = new Event('input');
    element.dispatchEvent(event);
  }

  it('should render user\'s details', fakeAsync(() => {
    component.user = {id: 0, name: 'Foo Bar', username: 'foobar', email: 'foobar@gmail.com', phone: '1234'};

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const debugElement = fixture.debugElement;
    expect(debugElement.query(By.css('#input-name')).nativeElement.value).toBe('Foo Bar');
    expect(debugElement.query(By.css('#input-username')).nativeElement.value).toBe('foobar');
    expect(debugElement.query(By.css('#input-email')).nativeElement.value).toBe('foobar@gmail.com');
    expect(debugElement.query(By.css('#input-phone')).nativeElement.value).toBe('1234');

  }));
});
