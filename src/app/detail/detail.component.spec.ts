import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DetailComponent} from './detail.component';
import {By} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {DebugElement} from '@angular/core';

let fixture: ComponentFixture<DetailComponent>;
let page: Page;

function setUpPage() {
  fixture.detectChanges();
  tick();
  page = new Page();
  fixture.detectChanges();
}

describe('DetailComponent', () => {
  let component: DetailComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [ReactiveFormsModule]
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

    setUpPage();

    updateInputField(page.inputName.nativeElement, 'Tom');
    updateInputField(page.inputUsername.nativeElement, 'Tommy');
    updateInputField(page.inputEmail.nativeElement, 'tommy@gmail.com');
    updateInputField(page.inputPhone.nativeElement, '5678');

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

    setUpPage();

    expect(page.getNameValue()).toBe('Foo Bar');
    expect(page.getUsernameValue()).toBe('foobar');
    expect(page.getEmailValue()).toBe('foobar@gmail.com');
    expect(page.getPhoneValue()).toBe('1234');
  }));

  it('should render user\'s address', fakeAsync(() => {
    component.user = {id: 0, username: 'foobar2'};
    component.user.address = {
      street: 'street',
      city: 'city',
      zipcode: 'zipcode'
    };

    setUpPage();

    expect(page.getStreetValue()).toBe('street');
  }));
});

class Page {
  inputName: DebugElement;
  inputUsername: DebugElement;
  inputEmail: DebugElement;
  inputPhone: DebugElement;
  inputStreet: DebugElement;
  inputCity: DebugElement;
  inputZipcode: DebugElement;

  constructor() {
    this.inputName = fixture.debugElement.query(By.css('#input-name'));
    this.inputUsername = fixture.debugElement.query(By.css('#input-username'));
    this.inputEmail = fixture.debugElement.query(By.css('#input-email'));
    this.inputPhone = fixture.debugElement.query(By.css('#input-phone'));
    this.inputStreet = fixture.debugElement.query(By.css('#input-street'));
    this.inputCity = fixture.debugElement.query(By.css('#input-city'));
    this.inputZipcode = fixture.debugElement.query(By.css('#input-zipcode'));
  }

  getNameValue() {
    return this.inputName.nativeElement.value;
  }

  getUsernameValue() {
    return this.inputUsername.nativeElement.value;
  }

  getEmailValue() {
    return this.inputEmail.nativeElement.value;
  }

  getPhoneValue() {
    return this.inputPhone.nativeElement.value;
  }

  getStreetValue() {
    return this.inputStreet.nativeElement.value;
  }
}
