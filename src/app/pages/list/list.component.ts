import { Component, OnInit } from '@angular/core';

// Services
import { SearchService } from '../../services/search/search.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private searchService: SearchService,
    private authenticationService: AuthenticationService
  ) {
    authenticationService.user$.subscribe(data => {
      if (data.accessToken) {
        this.showList = true;
      }
    });
  }

  public listofProducts: any;

  public showList: boolean;

  ngOnInit() {
  }

  search(searchQuery: string) {
    this.searchService.search(searchQuery).subscribe( products => {
      this.listofProducts = products;
    });
  }

}
