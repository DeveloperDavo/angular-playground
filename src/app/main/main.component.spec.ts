import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {By} from "@angular/platform-browser";
import {UserService} from "../user.service";
import {User} from "../user";

let userServiceStub: {
  users: string[];
};

describe('MainComponent', () => {
  userServiceStub = {
    users: ["Test"]
  };

  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [{provide: UserService, useValue: userServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [{provide: UserService, useValue: userServiceStub}]
    });

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;

    userService = fixture.debugElement.injector.get(UserService);

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render user list with 3 elements', async(() => {
    const givenUsers: User[] = [
      {id: 1, username: "Foo"},
      {id: 2, username: "Bar"},
      {id: 3, username: "Baz"},
    ];
    userService.users = givenUsers;

    fixture.detectChanges();

    const debugElements = fixture.debugElement.queryAll(By.css('#user-list li'));
    expect(debugElements[0].nativeElement.textContent).toContain(givenUsers[0].username);
    expect(debugElements[1].nativeElement.textContent).toContain(givenUsers[1].username);
    expect(debugElements[2].nativeElement.textContent).toContain(givenUsers[2].username);
  }));

  it('should render user list with 4 elements', async(() => {
    const givenUsers: User[] = [
      {id: 1, username: "Baz"},
      {id: 2, username: "Foo"},
      {id: 3, username: "Bar"},
      {id: 4, username: "Fizz"}
    ];

    userService.users = givenUsers;

    fixture.detectChanges();

    const debugElements = fixture.debugElement.queryAll(By.css('#user-list li'));
    expect(debugElements[0].nativeElement.textContent).toContain(givenUsers[0].username);
    expect(debugElements[1].nativeElement.textContent).toContain(givenUsers[1].username);
    expect(debugElements[2].nativeElement.textContent).toContain(givenUsers[2].username);
    expect(debugElements[3].nativeElement.textContent).toContain(givenUsers[3].username);
  }));
});
