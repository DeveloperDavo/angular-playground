import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import createSpyObj = jasmine.createSpyObj;
import 'rxjs/add/observable/never';

describe('UserService', () => {
  it('expects a GET request to api', () => {
    const http = createSpyObj('httpClient', ['get']);
    const userService = new UserService(http);

    http.get.and.returnValue(Observable.never());

    userService.getUserPromise();

    expect(http.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });

  it('should get users from resolved promise', done => {
    const http = createSpyObj('httpClient', ['get']);
    const userService = new UserService(http);

    const testUsers = [
      {id: 1, username: 'Foo'},
      {id: 2, username: 'Bar'},
      {id: 3, username: 'Baz'}
    ];

    http.get.and.returnValue(Observable.of(testUsers));

    userService.getUserPromise().then(users => {
      expect(users).toEqual(testUsers);
      done();
    });
  });

});
