import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, shareReplay} from 'rxjs';
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

  getUserById(id: number): Observable<User> {
    if (!this.users$ByIdPool[id]) {
      this.users$ByIdPool[id] = this.http.get<User>(`${this.api}/users/${id}`).pipe(shareReplay());
    }
    return this.users$ByIdPool[id];
  }

  getUserByUsername(username: string) {
    if(!this.users$ByUsernamePool[username]) {
      this.users$ByUsernamePool[username] = this.http.get<User>(`${this.api}/users/username/${username}`).pipe(shareReplay());
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
