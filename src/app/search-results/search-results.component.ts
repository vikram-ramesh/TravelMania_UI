import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../services/flights.service';
import { Flight } from '../model/Flight';
import { MessageService  } from '../services/share-flight-details.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  message: any;
  subscription: Subscription;
  flights: any = [];
  constructor(private messageService: MessageService) {
    this.message = this.messageService.getMessage();
  }

  ngOnInit() {
    console.log(this.message);
  }

}
