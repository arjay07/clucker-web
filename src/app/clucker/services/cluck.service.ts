import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostCluck} from '@models/post-cluck';
import {Cluck} from '@models/cluck';
import {map, Observable} from 'rxjs';
import {environment} from '@env';
import {Page, PageParams} from '@models/page';

@Injectable({
  providedIn: 'root'
})
export class CluckService {

  api = environment.api;

  constructor(private http: HttpClient) { }

  postCluck(requestBody: PostCluck): Observable<Cluck> {
    return this.http.post<Cluck>(`${this.api}/clucks`, requestBody);
  }

  getClucks(params: PageParams = { sort: [ 'posted,desc' ] }): Observable<Page<Cluck>> {
    return this.http.get<Page<Cluck>>(`${this.api}/clucks`, { params });
  }
}

