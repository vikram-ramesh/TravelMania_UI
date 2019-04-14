import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightsService } from '../services/flights.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../services/share-flight-details.service';
import { Flight } from '../model/Flight';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.css'],
  providers: [NgbCarouselConfig]
})
export class LandingPageComponentComponent implements OnInit {
  flightSearchForm: FormGroup;
  flight = new Flight();

  constructor(private router: Router, private formBuilder: FormBuilder, private config: NgbCarouselConfig,
              private msgService: MessageService) {
    this.flightSearchForm = this.formBuilder.group({
      source: [''],
      destination: [''],
      date: ['']
    });

    this.config.showNavigationArrows = false;
    this.config.showNavigationIndicators = false;
  }

  ngOnInit() {
  }

  buildFlightObject() {
    this.flight.source = this.flightSearchForm.value.source;
    this.flight.destination = this.flightSearchForm.value.destination;
    this.flight.date = this.flightSearchForm.value.date;
    this.flight.stops = 1;
    this.flight.stopName = 'Heathrow Airport (LHR)';
    this.flight.departureTime = '7.30 AM';
    this.flight.arrivalTimeAtStop = '7.05 PM';
    this.flight.departureTimeFromStop = '1.25 PM';
    this.flight.arrivalTime = '3.10 PM';
    this.flight.layoverTime = '4h 20m';
  }

  onSubmit() {
    this.buildFlightObject();
    this.router.navigate(['/searchResults']);
    this.msgService.sendMessage(this.flight);
  }
}
