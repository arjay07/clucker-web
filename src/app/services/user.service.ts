import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, of} from 'rxjs';
import {User} from '@models/user';
import {environment} from '@env';
import {UserUpdateRequest} from '@models/user-update-request';
import {Page} from '@models/page';
import {Cache} from '@interfaces/cache';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = environment.api;

  userIdCache: Cache<number, User> = new Cache<number, User>();
  usernameCache: Cache<string, User> = new Cache<string, User>();

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<User> {
    const cachedUser = this.userIdCache.getById(id);
    if (cachedUser)
      return cachedUser;
    return this.http.get<User>(`${this.api}/users/${id}`)
      .pipe(map(value => {
        this.userIdCache.addToCache(value.id, of(value));
        return value;
      }));
  }

  getUserByUsername(username: string) {
    const cachedUser = this.usernameCache.getById(username);
    if (cachedUser)
      return cachedUser;
    return this.http.get<User>(`${this.api}/users/username/${username}`)
      .pipe(map(value => {
        this.usernameCache.addToCache(value.username, of(value));
        return value;
      }));
  }

  getSelf(): Observable<User> {
    return this.http.get<User>(`${this.api}/users/self`);
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
