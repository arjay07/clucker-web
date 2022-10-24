import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, of, shareReplay} from 'rxjs';
import {User} from '@models/user';
import {environment} from '@env';
import {UserUpdateRequest} from '@models/user-update-request';
import {Page} from '@models/page';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = environment.api;

  users$ByIdPool: { [id: number]: Observable<User> } = {};

  users$ByUsernamePool: { [ username: string ]: Observable<User> } = {};

  self$: Observable<User>;

  constructor(private http: HttpClient) {
    this.self$ = this.http.get<User>(`${this.api}/users/self`).pipe(shareReplay(1));
  }

  getUserById(id: number, cached: boolean = true): Observable<User> {
    if (!cached) {
      return this.http.get<User>(`${this.api}/users/${id}`);
    }
    if (!this.users$ByIdPool[id]) {
      this.users$ByIdPool[id] = this.http.get<User>(`${this.api}/users/${id}`)
        .pipe(map(value => {
          const { username } = value;
          this.users$ByUsernamePool[username] = of(value);
          return value;
        }))
        .pipe(shareReplay());
    }
    return this.users$ByIdPool[id];
  }

  getUserByUsername(username: string, cached: boolean = true) {
    if (!cached) {
      return this.http.get<User>(`${this.api}/users/username/${username}`);
    }
    if(!this.users$ByUsernamePool[username]) {
      this.users$ByUsernamePool[username] = this.http.get<User>(`${this.api}/users/username/${username}`)
        .pipe(map(value => {
          const { id } = value;
          this.users$ByIdPool[id] = of(value);
          return value;
        }))
        .pipe(shareReplay({ refCount: false, windowTime: 1000 }));
    }
    return this.users$ByUsernamePool[username];
  }

  get self(): Observable<User> {
    return this.self$;
  }

  updateUserProfile(id: number, userUpdate: UserUpdateRequest) {
    return this.http.put(`${this.api}/users/${id}`, userUpdate);
  }

  followUser(id: number) {
    return this.http.put(`${this.api}/users/${id}/followers`, null);
  }

  unfollowUser(id: number) {
    return this.http.delete(`${this.api}/users/${id}/followers`);
  }

  getFollowers(id: number): Observable<Page<User>> {
    return this.http.get<Page<User>>(`${this.api}/users/${id}/followers`);
  }

  getFollowing(id: number): Observable<Page<User>> {
    return this.http.get<Page<User>>(`${this.api}/users/${id}/following`);
  }
}
