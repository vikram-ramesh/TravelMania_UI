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
  flights:any = [];  
  constructor(private _flightsService: FlightsService,private messageService: MessageService) { 
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnInit() {
     console.log(this.message);
      this.flights = localStorage.getItem("flight");
  }

}
