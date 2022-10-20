import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '@models/user';
import {environment} from '@env';
import {UserUpdateRequest} from '@models/user-update-request';
import {Page} from '@models/page';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/users/${id}`);
  }

  getUserByUsername(username: string) {
    return this.http.get<User>(`${this.api}/users/username/${username}`);
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
