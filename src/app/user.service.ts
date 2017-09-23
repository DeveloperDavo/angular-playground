import {Injectable} from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
  }

  getUsersPromise(): Promise<User[]> {
    return new Promise(res => {
      this.http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe(users => {
          res(users);
        });
    });
  }

  getUserPromise(id: number): Promise<User> {
    return new Promise(res => res({id: id, username: 'test'}));
  }
}
