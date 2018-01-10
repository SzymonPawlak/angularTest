import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

// Services
import { AuthenticationService } from '../authentication/authentication.service';

// Models
import { User } from '../../models/models';

@Injectable()
export class AccountsService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    authenticationService.user$.subscribe(data => {
      this.user = data;
    });
  }
  public accountId: string;
  private user: User;

  getAccounts() {
    return this.http
      .get("https://epicuroapitest.azurewebsites.net/api/accounts",{
        headers: new HttpHeaders().set('Authorization', `${this.user.accessToken} ${ this.user.tokenType}`),
      })
      .subscribe( data => {
        this.accountId = data[0]['accountId'];
      });
  }
}
