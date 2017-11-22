import {Inject, Injectable} from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { UserService } from './user.service';

@Injectable()
export class HttpUserService implements UserService {
  constructor(private http: HttpClient, @Inject('API_URL') private usersUrl) { }

  getUser(id: number = 1): Observable<User> {
    console.log('HttpUserService');

    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url)
      .pipe(
        tap(_ => console.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(heroes => console.log(`fetched heroes`)),
        catchError(this.handleError('getUsers', []))
      );
  }

  areYouFake(): boolean {
    return false;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
