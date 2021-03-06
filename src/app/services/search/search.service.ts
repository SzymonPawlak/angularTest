import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Services
import { AuthenticationService } from '../authentication/authentication.service';
import { AccountsService } from '../accounts/accounts.service';

// Models
import { User } from '../../models/access';

@Injectable()
export class SearchService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private accountsService: AccountsService
  ) {
    authenticationService.user$.subscribe(data => {
      this.user = data;
    });
  }

  private user: User;

  search(searchQuery: string, start: number, range: number, ) {
    const accountsId = this.accountsService.accountId;
    return this.http
    .get(`https://epicuroapitest.azurewebsites.net/api/products/${accountsId}?q=${searchQuery}&start=${start}&num=${range}&type=now`,{
      headers: new HttpHeaders().set('Authorization', `${this.user.accessToken} ${ this.user.tokenType}`),
    });

  }

}
