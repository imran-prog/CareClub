import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: Http) {}

  saveUser(user: any) {
    return this.http
      .post('http://localhost:8080/api/Saveuser/', user)
      .pipe(map((response: Response) => response.json()));
  }
  getUser() {
    return this.http
      .get('http://localhost:8080/api/getuser/')
      .pipe(map((response: Response) => response.json()));
  }
  deleteUser(id: any) {
    return this.http
      .post('http://localhost:8080/api/deleteuser/', { id: id })
      .pipe(map((response: Response) => response.json()));
  }
}
