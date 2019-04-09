import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightsService } from '../services/flights.service';
import { Router } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.css'],
  providers: [NgbCarouselConfig]
})
export class LandingPageComponentComponent implements OnInit {
  flightSearchForm: FormGroup;
  flights: any = [];
  constructor(private router: Router, private formBuilder: FormBuilder,
              private flightsService: FlightsService, private config: NgbCarouselConfig) {
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

  onSubmit() {
    console.log(this.flightSearchForm.value.source);
    // this.flightSearchForm.value.source, this.flightSearchForm.value.destination
    this.flightsService.getFlightBySourceAndDestination('Boston', 'LA')
     .subscribe(res => {
       if (res) {
        this.flights = res;
        localStorage.setItem('flight', this.flights);
        this.router.navigate(['/searchResults']);
        console.log(this.flights[0].source);
       }
    });
  }
}
