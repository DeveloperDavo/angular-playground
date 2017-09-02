import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {By} from "@angular/platform-browser";
import {UserService} from "../user.service";
import {User} from "../user";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DetailComponent} from "../detail/detail.component";

describe('MainComponent', () => {
  let mainComponent: MainComponent;
  let mainFixture: ComponentFixture<MainComponent>;
  let userService: UserService;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, DetailComponent],
      providers: [UserService],
      imports: [
        HttpClientTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {

    mainFixture = TestBed.createComponent(MainComponent);
    mainComponent = mainFixture.componentInstance;

    userService = mainFixture.debugElement.injector.get(UserService);

  });

  it('should be created', () => {
    expect(mainComponent).toBeTruthy();
  });

  it('should get users from User service', async(() => {
    const testUsers = [
      {id: 1, username: "Foo"},
      {id: 2, username: "Bar"},
      {id: 3, username: "Baz"}
    ];

    spy = spyOn(userService, 'getUsers')
      .and.returnValue(Promise.resolve(testUsers));

    mainFixture.detectChanges();

    spy.calls.mostRecent().returnValue.then(() => {
      mainFixture.detectChanges();
      expect(mainComponent.users).toBe(testUsers);
    });

  }));

  it('should render user table with 3 elements', async(() => {
    const testUsers = [
      {id: 1, username: "Foo"},
      {id: 2, username: "Bar"},
      {id: 3, username: "Baz"}
    ];

    mainComponent.users = testUsers;

    mainFixture.detectChanges();

    const debugElements = mainFixture.debugElement.queryAll(By.css('tbody tr'));
    expect(debugElements[0].nativeElement.textContent).toContain(testUsers[0].username);
    expect(debugElements[1].nativeElement.textContent).toContain(testUsers[1].username);
    expect(debugElements[2].nativeElement.textContent).toContain(testUsers[2].username);
  }));

  it('should render user table with 4 elements', async(() => {

    const testUsers: User[] = [
      {id: 1, username: "Baz"},
      {id: 2, username: "Foo"},
      {id: 3, username: "Bar"},
      {id: 4, username: "Fizz"}
    ];

    mainComponent.users = testUsers;
    mainFixture.detectChanges();

    const debugElements = mainFixture.debugElement.queryAll(By.css('tbody tr'));
    expect(debugElements[0].nativeElement.textContent).toContain(testUsers[0].username);
    expect(debugElements[1].nativeElement.textContent).toContain(testUsers[1].username);
    expect(debugElements[2].nativeElement.textContent).toContain(testUsers[2].username);
    expect(debugElements[3].nativeElement.textContent).toContain(testUsers[3].username);
  }));

  it('should render user details', async(() => {
    mainComponent.users = [
      {id: 1, name: "name", username: "username", email: "email", phone: "phone"},
    ];

    mainFixture.detectChanges();
    const debugElements = mainFixture.debugElement.queryAll(By.css('tbody tr td'));

    expect(debugElements[0].nativeElement.textContent).toContain("name");
    expect(debugElements[1].nativeElement.textContent).toContain("username");
    expect(debugElements[2].nativeElement.textContent).toContain("email");
    expect(debugElements[3].nativeElement.textContent).toContain("phone");
  }));

  it('should set selectedUser upon row click', async(() => {

    mainFixture.detectChanges();

    const selectedTestUser = {id: 0, name: "Foo Bar", username: "foobar", email: "foobar@gmail.com", phone: "1234"};
    mainComponent.users = [
      selectedTestUser,
      {id: 1, name: "name", username: "username", email: "email", phone: "phone"}
    ];

    mainFixture.detectChanges();
    const debugElements = mainFixture.debugElement.queryAll(By.css('tbody tr'));

    debugElements[0].nativeElement.click();

    expect(mainComponent.selectedUser).toBe(selectedTestUser);

  }));

});

