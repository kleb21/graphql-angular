import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable, switchMap } from 'rxjs';
import { User, UserWithPosts } from '../../../shared/Users.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUsersRxjsService {

  public apiUrl = "https://jsonplaceholder.typicode.com/";
  
  private http = inject(HttpClient);

  getUsersSwitchMap(): Observable<UserWithPosts | unknown> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      switchMap(users => {
        const fullData$ = users.map(user => {
          return this.http.get(`${this.apiUrl}/posts?userId=${user.id}`).pipe(
            map(posts => ({
              ...user,
              posts
            }))
          );
        });
        return forkJoin(fullData$);
      })
    );
  }

  
}
