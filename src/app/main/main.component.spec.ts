import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {By} from "@angular/platform-browser";
import {UserService} from "../user.service";
import {User} from "../user";
import {UserServiceFake} from "../user.service-fake";
import {tick} from "@angular/core/testing";


describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [{provide: UserService, useClass: UserServiceFake}]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;

    userService = fixture.debugElement.injector.get(UserService);

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render user list with 3 elements', fakeAsync(() => {
    const testUsers = [
      {id: 1, username: "Foo"},
      {id: 2, username: "Bar"},
      {id: 3, username: "Baz"}
    ];

    userService.setUsersForTest(testUsers);

    fixture.detectChanges();

    tick();
    fixture.detectChanges();

    const debugElements = fixture.debugElement.queryAll(By.css('#user-list li'));
    expect(debugElements[0].nativeElement.textContent).toContain(testUsers[0].username);
    expect(debugElements[1].nativeElement.textContent).toContain(testUsers[1].username);
    expect(debugElements[2].nativeElement.textContent).toContain(testUsers[2].username);
  }));

  it('should render user list with 4 elements', fakeAsync(() => {

    const testUsers: User[] = [
      {id: 1, username: "Baz"},
      {id: 2, username: "Foo"},
      {id: 3, username: "Bar"},
      {id: 4, username: "Fizz"}
    ];

    userService.setUsersForTest(testUsers);
    fixture.detectChanges();

    tick();
    fixture.detectChanges();

    const debugElements = fixture.debugElement.queryAll(By.css('#user-list li'));
    expect(debugElements[0].nativeElement.textContent).toContain(testUsers[0].username);
    expect(debugElements[1].nativeElement.textContent).toContain(testUsers[1].username);
    expect(debugElements[2].nativeElement.textContent).toContain(testUsers[2].username);
    expect(debugElements[3].nativeElement.textContent).toContain(testUsers[3].username);
  }));
});

