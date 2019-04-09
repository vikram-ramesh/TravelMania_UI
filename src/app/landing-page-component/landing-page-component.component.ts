import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightsService } from '../services/flights.service';
import { Router } from '@angular/router';
=======
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
>>>>>>> Stashed changes

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.css'],
  providers: [NgbCarouselConfig]
})
export class LandingPageComponentComponent implements OnInit {
<<<<<<< Updated upstream
  flightSearchForm: FormGroup;
  flights: any = [];
  constructor(private router: Router, private formBuilder: FormBuilder, private _flightsService: FlightsService) {
    this.flightSearchForm = this.formBuilder.group({
      source: [''],
      destination: [''],
      date: ['']
    });
=======

  constructor(private config: NgbCarouselConfig) {
    this.config.showNavigationArrows = false;
    this.config.showNavigationIndicators = false;
>>>>>>> Stashed changes
  }

  ngOnInit() {
  }


  onSubmit(){
    console.log(this.flightSearchForm.value.source)
    this._flightsService.getFlightBySourceAndDestination('Boston','LA')//this.flightSearchForm.value.source, this.flightSearchForm.value.destination
     .subscribe(res => {
       if(res){
        this.flights = res;
        localStorage.setItem("flight",this.flights);
        this.router.navigate(['/searchResults']);
        console.log(this.flights[0].source);
       }
    });
  }
}
