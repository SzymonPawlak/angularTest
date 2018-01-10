import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';

// Services
import { AuthenticationService } from './services/authentication/authentication.service';
import { AccountsService} from './services/accounts/accounts.service';
import { SearchService} from './services/search/search.service';

// 3th part libraries
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule
  ],
  providers: [
    AuthenticationService,
    AccountsService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
