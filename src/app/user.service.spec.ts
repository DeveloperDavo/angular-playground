import {TestBed, inject} from '@angular/core/testing';
import {UserService} from './user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

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

  it('expects a GET request to api', inject([HttpClient, UserService],
    (http: HttpClient, userService: UserService) => {
      spyOn(http, 'get');

      userService.getUsers();

      expect(http.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    }));

});
