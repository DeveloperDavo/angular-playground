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

  it('expects a GET request', inject([HttpClient, HttpTestingController, UserService],
    (http: HttpClient, httpMock: HttpTestingController, userService: UserService) => {
      userService.getUsers();

      // At this point, the request is pending, and no response has been
      // sent. The next step is to expect that the request happened.
      const req = httpMock.expectOne('/data');

      // If no request with that URL was made, or if multiple requests match,
      // expectOne() would throw. However this test makes only one request to
      // this URL, so it will match and return a mock request. The mock request
      // can be used to deliver a response or make assertions against the
      // request. In this case, the test asserts that the request is a GET.
      expect(req.request.method).toEqual('GET');

      // Next, fulfill the request by transmitting a response.
      req.flush({name: 'Test Data'});

      // Finally, assert that there are no outstanding requests.
      httpMock.verify();
    }));
});
