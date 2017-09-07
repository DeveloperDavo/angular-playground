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

    userService.getUsers();

    expect(http.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });

});
