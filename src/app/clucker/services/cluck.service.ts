import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostCluck} from '@models/post-cluck';
import {Cluck} from '@models/cluck';
import {Observable} from 'rxjs';
import {environment} from '@env';
import {Page, PageParams} from '@models/page';
import {Comment} from '@models/comment';

@Injectable({
  providedIn: 'root'
})
export class CluckService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  postCluck(requestBody: PostCluck): Observable<Cluck> {
    return this.http.post<Cluck>(`${this.api}/clucks`, requestBody);
  }

  getPersonalFeed(params: PageParams = { sort: ['posted,desc'] }): Observable<Page<Cluck>> {
    return this.http.get<Page<Cluck>>(`${this.api}/feed/personal`, { params });
  }

  getClucks(params: PageParams = { sort: [ 'posted,desc' ] }): Observable<Page<Cluck>> {
    return this.http.get<Page<Cluck>>(`${this.api}/clucks`, { params });
  }

  getUserClucks(userId: number, params: PageParams = { sort: [ 'posted,desc' ] }): Observable<Page<Cluck>> {
    return this.http.get<Page<Cluck>>(`${this.api}/users/${userId}/clucks`, { params });
  }

  addEggToCluck(cluckId: string): Observable<Cluck> {
    return this.http.put<Cluck>(`${this.api}/clucks/${cluckId}/rating`, null);
  }

  removeEggFromCluck(cluckId: string): Observable<Cluck> {
    return this.http.delete<Cluck>(`${this.api}/clucks/${cluckId}/rating`);
  }

  getComments(cluckId: string): Observable<Page<Comment>> {
    return this.http.get<Page<Comment>>(`${this.api}/clucks/${cluckId}/comments`);
  }
}

