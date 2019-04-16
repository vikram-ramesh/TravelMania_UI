import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../services/share-flight-details.service';
import { Flight } from '../model/Flight';
import { $ } from 'protractor';
import { Input } from '@angular/compiler/src/core';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.css'],

  providers: [NgbCarouselConfig]
})
export class LandingPageComponentComponent implements OnInit {
  source: any;
  destination: any;
  date: any;
  flag1: any;
  flag2: any;
  flag3: any;
  flightSearchForm: FormGroup;
  flight = new Flight();
  sourceText = "";
  destinationText = "";
  showDropDown = false;
  states = ['Boston', "Mumbai", "San Francisco", "Seattle", "Cancun", "Toronto" ];
  showDropDownDest = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private config: NgbCarouselConfig,
              private msgService: MessageService) {
    this.flightSearchForm = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.config.showNavigationArrows = false;
    this.config.showNavigationIndicators = false;
  }

  ngOnInit() {
  }

  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  keyPress(event: any)
  {
    this.showDropDown = !this.showDropDown;
    if(event.keyCode === 8 && this.sourceText == '') {
          this.showDropDown = false;
    }
  }
  keyPressDest(event: any)
  {
    this.showDropDownDest = !this.showDropDownDest;
    if(event.keyCode === 8 && this.destinationText == '') {
          this.showDropDownDest = false;
    }
  }
  
  selectSourceValue(value){
    this.flightSearchForm.controls['source'].setValue(value);
    this.sourceText = this.flightSearchForm.controls['source'].value;
    this.showDropDown = false;
  }

  selectDestValue(value){
    this.flightSearchForm.controls['destination'].setValue(value);
    this.destinationText = this.flightSearchForm.controls['destination'].value;
    this.showDropDownDest = false;
  }

  getSearchValueSource(){
    return this.sourceText;
  }
  getSearchValueDest(){
    return this.destinationText;
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
    this.flight.price = '$1,209';
    this.flight.totalTime = '21h 10min';
  }

  onSubmit() {
    if (this.flightSearchForm.value.source=="") {
      this.flag1=false;
      this.source = document.getElementById('source');
      this.source.setAttribute('style', 'border:red solid 2px;');
    } 
    if (this.flightSearchForm.value.source!="") {
      this.flag1=true;
      this.source = document.getElementById('source');
      this.source.setAttribute('style', 'border:white solid 0px;');
    } 
    if(this.flightSearchForm.value.destination==""){
      this.flag2=false;
      this.destination = document.getElementById('destination');
      this.destination.setAttribute('style', 'border:red solid 2px;');
    }
    if (this.flightSearchForm.value.destination!="") {
      this.flag2=true;
      this.destination = document.getElementById('destination');
      this.destination.setAttribute('style', 'border:white solid 0px;');
    }
    if(this.flightSearchForm.value.date== undefined){
      this.flag3=false;
      this.date = document.getElementById('date');
      this.date.setAttribute('style', 'border:red solid 2px;');
    }
    else{
      this.flag3=true;
      this.date = document.getElementById('date');
      this.date.setAttribute('style', 'border:white solid 0px;');
      
    }
    if(this.flag1 && this.flag2 && this.flag3) {
      this.buildFlightObject();
      this.router.navigate(['/searchResults']);
      this.msgService.sendMessage(this.flight);
      localStorage.setItem('flight', JSON.stringify(this.flight));
    }
  }
}