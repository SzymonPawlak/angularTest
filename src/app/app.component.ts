import { Component } from '@angular/core';

// 3th part libraries
import { Spinkit } from 'ng-http-loader/spinkits';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public spinkit = Spinkit;
}
