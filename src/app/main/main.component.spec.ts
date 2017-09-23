import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {By} from '@angular/platform-browser';
import {UserService} from '../user.service';
import {User} from '../user';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {fakeAsync} from '@angular/core/testing';
import {tick} from '@angular/core/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';

let mainFixture: ComponentFixture<MainComponent>;
let page: Page;

function clickRow(index: number) {
  page.getRowElement(index).click();
  mainFixture.detectChanges();
}

function clickDelete(index: number) {
  page.getDeleteButtonElement(index).click();
  mainFixture.detectChanges();
}

function clickAdd() {
  page.getAddButtonElement().click();
  mainFixture.detectChanges();
}

describe('MainComponent', () => {
  let mainComponent: MainComponent;
  let userService: UserService;
  let ngOnInitSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [UserService],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
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

    const spy = spyOn(userService, 'getUsersPromise')
      .and.returnValue(Promise.resolve(testUsers));

    mainFixture.detectChanges();

    spy.calls.mostRecent().returnValue.then(() => {
      mainFixture.detectChanges();
      expect(mainComponent.users).toBe(testUsers);
    });

  }));

  it('should delete user upon button click', fakeAsync(() => {
    const testUsers = [
      {id: 1, username: 'Foo'},
      {id: 2, username: 'Bar'},
      {id: 3, username: 'Baz'}
    ];

    mainComponent.users = testUsers;
    setUpPageObject();

    clickDelete(1);

    expect(mainComponent.users[0]).toBe(testUsers[0]);
    expect(mainComponent.users[1]).toBe(testUsers[2]);
  }));

  describe('should render', () => {
    it('user table with 3 elements', fakeAsync(() => {
      const testUsers = [
        {id: 1, username: 'Foo'},
        {id: 2, username: 'Bar'},
        {id: 3, username: 'Baz'}
      ];

      mainComponent.users = testUsers;

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

      mainComponent.users = testUsers;

      setUpPageObject();

      expect(page.getRowTextContent(0)).toContain(testUsers[0].username);
      expect(page.getRowTextContent(1)).toContain(testUsers[1].username);
      expect(page.getRowTextContent(2)).toContain(testUsers[2].username);
      expect(page.getRowTextContent(3)).toContain(testUsers[3].username);
    }));

    it('user details', fakeAsync(() => {
      mainComponent.users = [
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
    mainFixture.detectChanges();
    tick();
    page = new Page();
    mainFixture.detectChanges();
  }
});

class Page {
  tableBody: DebugElement;
  tableRows: DebugElement[];
  tableRowColumns: DebugElement[];
  deleteButtons: DebugElement[];
  addButton: DebugElement;

  constructor() {
    this.tableBody = mainFixture.debugElement.query(By.css('tbody'));
    this.tableRows = mainFixture.debugElement.queryAll(By.css('tbody tr'));
    this.tableRowColumns = mainFixture.debugElement.queryAll(By.css('tbody tr td'));
    this.deleteButtons = mainFixture.debugElement.queryAll(By.css('#delete-button'));
    this.addButton = mainFixture.debugElement.query(By.css('#add-button'));
  }

  getRowElement(index: number) {
    return this.tableRows[index].nativeElement;
  }

  getRowTextContent(index: number) {
    return this.getRowElement(index).textContent;
  }

  getTableBodyClasses() {
    return this.tableBody.classes;
  }

  getColumnTextContent(index: number) {
    return this.tableRowColumns[index].nativeElement.textContent;
  }

  getDeleteButtonElement(index: number) {
    return this.deleteButtons[index].nativeElement;
  }

  getAddButtonElement() {
    return this.addButton.nativeElement;
  }
}
