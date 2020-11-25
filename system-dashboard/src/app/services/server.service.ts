import { Injectable } from '@angular/core';

import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Server} from '../shared/model/server.model';
import {ServerMessage} from '../shared/model/server-message';
import {catchError, map} from 'rxjs/operators';
import {RequestOptions} from 'http';

@Injectable()
export class ServerService {

  constructor(private http: HttpClient) {
    this.headers = new Headers({
      'Content-Type' : 'application/json',
      'Accept' : 'q=0.8;application/json;q=0.9'
    });

    this.options = new RequestOptions({ headers: this.headers });
  }

  options: RequestOptions;
  headers: Headers;

  getServers(): Observable<Server[]> {
    return this.http.get('http://localhost:5000/api/server')
    .pipe(map(res => res.json()))
    .pipe(catchError(this.handleError));
  }

  handleError(error: any): any {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  handleServerMessage(msg: ServerMessage): Observable<Response> {
    const url = 'http://localhost:5000/api/server/' + msg.id;
    return this.http.put(url, msg, this.options).pipe(map(res => res.json()));
  }

}
