import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightsService } from '../services/flights.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.css']
})
export class LandingPageComponentComponent implements OnInit {
  flightSearchForm: FormGroup;
  flights: any = [];
  constructor(private router: Router, private formBuilder: FormBuilder, private _flightsService: FlightsService) {
    this.flightSearchForm = this.formBuilder.group({
      source: [''],
      destination: [''],
      date: ['']
    });
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
