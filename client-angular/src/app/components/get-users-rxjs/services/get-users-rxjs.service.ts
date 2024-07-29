import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { UserWithPosts, User, Post } from '../../../shared/models/Users.interface';
@Injectable({
  providedIn: 'root'
})
export class GetUsersRxjsService {

  public apiUrl = "https://jsonplaceholder.typicode.com/";
  
  private http = inject(HttpClient);


  getUsersSwitchMap(index: number): Observable<UserWithPosts | null> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      switchMap(users => {
        const user = users.find(user => user.id === index);
        if (user) {
          return this.http.get<Post[]>(`${this.apiUrl}/posts?userId=${user.id}`).pipe(
            map(posts => ({
              ...user,
              posts
            }))
          );
        } 
        return of(null);
      })
    );
  }
  
}
