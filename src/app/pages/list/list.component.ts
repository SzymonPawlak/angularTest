import { Component } from '@angular/core';

// Services
import { SearchService } from '../../services/search/search.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';

// Models
import { Product } from '../../models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

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

  public listofProducts: Array<Product>;
  public showList: boolean;
  public startIndex = 0;
  public range = 10;
  public searchQuery: string;


  search(searchQuery: string) {
    this.searchQuery = searchQuery;
    this.searchService.search(searchQuery, this.startIndex, this.range).subscribe( products => {
      this.listofProducts = products['products'];
    });
  }

  onScroll () {
    this.startIndex = this.startIndex + 10;
    this.searchService.search(this.searchQuery, this.startIndex, this.range).subscribe( products => {
      this.listofProducts = this.listofProducts.concat(products['products']);
    });
  }

}
