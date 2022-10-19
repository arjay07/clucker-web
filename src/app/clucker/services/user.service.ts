import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserUpdateRequest} from '@models/user-update-request';
import {environment} from '@env';
import {Observable} from 'rxjs';
import {Page} from '@models/page';
import {User} from '@models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = environment.api;

  constructor(private http: HttpClient) { }

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
