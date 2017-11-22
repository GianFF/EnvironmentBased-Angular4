import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {USERS} from '../db/users-db';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = USERS;
    return {users};
  }
}
