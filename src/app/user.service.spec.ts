import {TestBed, inject} from '@angular/core/testing';
import {UserService} from './user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from "@angular/common/http";

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [
        HttpClientTestingModule,
      ],
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should throw error when trying to modify users', inject([UserService], (userService: UserService) => {
    const wrapper = function() {
      userService.setUsersForTest([]);
    };

    expect(wrapper).toThrow("This method should only be accessed from the UserServiceFake!")
  }));

  it('expects a GET request to api', inject([HttpClient, HttpTestingController, UserService],
    (http: HttpClient, httpMock: HttpTestingController, userService: UserService) => {
      userService.getUsers();

      const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');

      expect(req.request.method).toEqual('GET');

      httpMock.verify();
    }));
});
