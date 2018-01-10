import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Models
import { User } from '../../models/models';


@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  private userSource = new Subject<User>();
  user$ = this.userSource.asObservable();

  loginIn(user: string, password: string) {
    return this.http
      .post("http://epicuroapitest.azurewebsites.net/token", `grant_type=password&username=${user}&password=${password}`)
      .subscribe(data => {
        if (data['access_token']) {
          this.userSource.next(new User(data['access_token'], data['token_type']));
        }
      });
  }

}
