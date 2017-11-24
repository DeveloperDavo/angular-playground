import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {By} from '@angular/platform-browser';
import {UserService} from '../user.service';
import {User} from '../user';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {fakeAsync} from '@angular/core/testing';
import {tick} from '@angular/core/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {Router} from '@angular/router';

let fixture: ComponentFixture<MainComponent>;
let page: Page;

function clickRow(index: number) {
  page.getRowElement(index).click();
  fixture.detectChanges();
}

function clickDelete(index: number) {
  page.getDeleteButtonElement(index).click();
  fixture.detectChanges();
}

class RouterStub {
  navigateByUrl(url: string): void {
  }
}

describe('MainComponent', () => {
  let component: MainComponent;
  let userService: UserService;
  let router: Router;
  let ngOnInitSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [UserService,
        {provide: Router, useClass: RouterStub}],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;

    userService = fixture.debugElement.injector.get(UserService);
    router = fixture.debugElement.injector.get(Router);

    ngOnInitSpy = spyOn(component, 'ngOnInit');
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get users from User service', async(() => {
    ngOnInitSpy.and.callThrough();

    const testUsers = [
      {id: 1, username: 'Foo'},
      {id: 2, username: 'Bar'},
      {id: 3, username: 'Baz'}
    ];

    const spy = spyOn(userService, 'getUsersPromise')
      .and.returnValue(Promise.resolve(testUsers));

    fixture.detectChanges();

    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(component.users).toBe(testUsers);
    });
  }));

  it('should navigate to detail url upon row click', fakeAsync(() => {
    const spy = spyOn(router, 'navigateByUrl');

    component.users = [
      {id: 0, username: 'Foo'},
      {id: 1, username: 'Bar'},
      {id: 2, username: 'Baz'}
    ];

    setUpPageObject();

    clickRow(2);

    const navArgs = spy.calls.first().args[0];

    expect(navArgs).toBe('/detail/' + 2);

  }));

  it('should delete user upon button click', fakeAsync(() => {
    const testUsers = [
      {id: 1, username: 'Foo'},
      {id: 2, username: 'Bar'},
      {id: 3, username: 'Baz'}
    ];

    component.users = testUsers;
    setUpPageObject();

    clickDelete(1);

    expect(component.users[0]).toBe(testUsers[0]);
    expect(component.users[1]).toBe(testUsers[2]);
  }));

  describe('should render', () => {
    it('user table with 3 elements', fakeAsync(() => {
      const testUsers = [
        {id: 1, username: 'Foo'},
        {id: 2, username: 'Bar'},
        {id: 3, username: 'Baz'}
      ];

      component.users = testUsers;

      setUpPageObject();

      expect(page.getRowTextContent(0)).toContain(testUsers[0].username);
      expect(page.getRowTextContent(1)).toContain(testUsers[1].username);
      expect(page.getRowTextContent(2)).toContain(testUsers[2].username);
    }));

    it('user table with 4 elements', fakeAsync(() => {
      const testUsers: User[] = [
        {id: 1, username: 'Baz'},
        {id: 2, username: 'Foo'},
        {id: 3, username: 'Bar'},
        {id: 4, username: 'Fizz'}
      ];

      component.users = testUsers;

      setUpPageObject();

      expect(page.getRowTextContent(0)).toContain(testUsers[0].username);
      expect(page.getRowTextContent(1)).toContain(testUsers[1].username);
      expect(page.getRowTextContent(2)).toContain(testUsers[2].username);
      expect(page.getRowTextContent(3)).toContain(testUsers[3].username);
    }));

    it('user details', fakeAsync(() => {
      component.users = [
        {id: 1, name: 'name', username: 'username', email: 'email', phone: 'phone'},
      ];

      setUpPageObject();

      expect(page.getColumnTextContent(0)).toContain('name');
      expect(page.getColumnTextContent(1)).toContain('username');
      expect(page.getColumnTextContent(2)).toContain('email');
      expect(page.getColumnTextContent(3)).toContain('phone');
    }));
  });

  function setUpPageObject() {
    fixture.detectChanges();
    tick();
    page = new Page();
    fixture.detectChanges();
  }
});

class Page {
  tableBody: DebugElement;
  tableRows: DebugElement[];
  tableRowColumns: DebugElement[];
  deleteButtons: DebugElement[];
  addButton: DebugElement;

  constructor() {
    this.tableBody = fixture.debugElement.query(By.css('tbody'));
    this.tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    this.tableRowColumns = fixture.debugElement.queryAll(By.css('tbody tr td'));
    this.deleteButtons = fixture.debugElement.queryAll(By.css('#delete-button'));
    this.addButton = fixture.debugElement.query(By.css('#add-button'));
  }

  getRowElement(index: number) {
    return this.tableRows[index].nativeElement;
  }

  getRowTextContent(index: number) {
    return this.getRowElement(index).textContent;
  }

  getColumnTextContent(index: number) {
    return this.tableRowColumns[index].nativeElement.textContent;
  }

  getDeleteButtonElement(index: number) {
    return this.deleteButtons[index].nativeElement;
  }
}
