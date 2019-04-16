import { Component, OnInit } from '@angular/core';
import { MessageService  } from '../services/share-flight-details.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public isLHRCollapsed = true;
  public isDXBCollapsed = true;
  public isAUHCollapsed = true;
  public isAMSCollapsed = true;
  public isDOHCollapsed = true;
  message: any;
  subscription: Subscription;
  flights: any = [];
  constructor(private messageService: MessageService) {
    this.message = this.messageService.getMessage() ? this.messageService.getMessage() : JSON.parse(localStorage.getItem('flight'));
  }

  ngOnInit() {
    console.log(this.message);
  }

}
