import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {By} from '@angular/platform-browser';
import {UserService} from '../user.service';
import {User} from '../user';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Component, Input} from '@angular/core';

@Component({selector: 'app-detail', template: ''})
class DetailStubComponent {
  @Input() user: User;
}

describe('MainComponent', () => {
  let mainComponent: MainComponent;
  let mainFixture: ComponentFixture<MainComponent>;
  let userService: UserService;
  let ngOnInitSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, DetailStubComponent],
      providers: [UserService],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mainFixture = TestBed.createComponent(MainComponent);
    mainComponent = mainFixture.componentInstance;

    userService = mainFixture.debugElement.injector.get(UserService);

    ngOnInitSpy = spyOn(mainComponent, 'ngOnInit');
  });

  it('should be created', () => {
    expect(mainComponent).toBeTruthy();
  });

  it('should get users from User service', async(() => {
    ngOnInitSpy.and.callThrough();

    const testUsers = [
      {id: 1, username: 'Foo'},
      {id: 2, username: 'Bar'},
      {id: 3, username: 'Baz'}
    ];

    const spy = spyOn(userService, 'getUserPromise')
      .and.returnValue(Promise.resolve(testUsers));

    mainFixture.detectChanges();

    spy.calls.mostRecent().returnValue.then(() => {
      mainFixture.detectChanges();
      expect(mainComponent.users).toBe(testUsers);
    });

  }));


  it('should set selectedUser upon row click', async(() => {
    const selectedTestUser = {id: 0, name: 'Foo Bar', username: 'foobar', email: 'foobar@gmail.com', phone: '1234'};
    mainComponent.users = [
      selectedTestUser,
      {id: 1, name: 'name', username: 'username', email: 'email', phone: 'phone'}
    ];

    mainFixture.detectChanges();
    const debugElements = mainFixture.debugElement.queryAll(By.css('tbody tr'));

    debugElements[0].nativeElement.click();

    expect(mainComponent.selectedUser).toBe(selectedTestUser);
  }));

  describe('should render', () => {
    it('user table with 3 elements', async(() => {
      const testUsers = [
        {id: 1, username: 'Foo'},
        {id: 2, username: 'Bar'},
        {id: 3, username: 'Baz'}
      ];

      mainComponent.users = testUsers;

      mainFixture.detectChanges();

      const debugElements = mainFixture.debugElement.queryAll(By.css('tbody tr'));
      expect(debugElements[0].nativeElement.textContent).toContain(testUsers[0].username);
      expect(debugElements[1].nativeElement.textContent).toContain(testUsers[1].username);
      expect(debugElements[2].nativeElement.textContent).toContain(testUsers[2].username);
    }));

    it('user table with 4 elements', async(() => {
      const testUsers: User[] = [
        {id: 1, username: 'Baz'},
        {id: 2, username: 'Foo'},
        {id: 3, username: 'Bar'},
        {id: 4, username: 'Fizz'}
      ];

      mainComponent.users = testUsers;
      mainFixture.detectChanges();

      const debugElements = mainFixture.debugElement.queryAll(By.css('tbody tr'));
      expect(debugElements[0].nativeElement.textContent).toContain(testUsers[0].username);
      expect(debugElements[1].nativeElement.textContent).toContain(testUsers[1].username);
      expect(debugElements[2].nativeElement.textContent).toContain(testUsers[2].username);
      expect(debugElements[3].nativeElement.textContent).toContain(testUsers[3].username);
    }));

    it('user details', async(() => {
      mainComponent.users = [
        {id: 1, name: 'name', username: 'username', email: 'email', phone: 'phone'},
      ];

      mainFixture.detectChanges();
      const debugElements = mainFixture.debugElement.queryAll(By.css('tbody tr td'));

      expect(debugElements[0].nativeElement.textContent).toContain('name');
      expect(debugElements[1].nativeElement.textContent).toContain('username');
      expect(debugElements[2].nativeElement.textContent).toContain('email');
      expect(debugElements[3].nativeElement.textContent).toContain('phone');
    }));

    it('selected row style upon row click', async(() => {
      mainComponent.users = [
        {id: 0, name: 'Foo Bar', username: 'foobar', email: 'foobar@gmail.com', phone: '1234'},
        {id: 1, name: 'name', username: 'username', email: 'email', phone: 'phone'}
      ];
      mainFixture.detectChanges();

      const debugElements = mainFixture.debugElement.queryAll(By.css('tbody tr'));
      debugElements[0].nativeElement.click();
      mainFixture.detectChanges();

      const debugElement = mainFixture.debugElement.query(By.css('tbody'));
      expect(debugElement.classes.selected).toBe(true);
    }));
  });
});
