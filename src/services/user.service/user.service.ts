import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';

export interface UserService {

  getUser(id: number): Observable<User>;

  getUsers(): Observable<User[]>;

  areYouFake(): boolean;
}
