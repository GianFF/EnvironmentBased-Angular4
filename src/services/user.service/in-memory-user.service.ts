import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { USERS } from '../../db/users-db';
import { UserService } from './user.service';

@Injectable()
export class InMemoryUserService implements UserService {
  getUser(id: number = 1): Observable<User> {
    console.log('InMemoryUserService');

    return of(USERS[id]);
  }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  areYouFake(): boolean {
    return true;
  }
}
