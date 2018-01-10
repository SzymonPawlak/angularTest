import { Component, OnInit } from '@angular/core';

// Services
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AccountsService } from '../../services/accounts/accounts.service';

// Models
import { User } from '../../models/access';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(
    private authenticationService: AuthenticationService,
    private accountsService: AccountsService
  ) {
    authenticationService.user$.subscribe(data => {
      this.accountsService.getAccounts();
    });
   }

  sesionID: string;

  ngOnInit() {
  }

  onSubmit(name: string, password: string): void {

    this.authenticationService.loginIn(name, password);

  }
}
