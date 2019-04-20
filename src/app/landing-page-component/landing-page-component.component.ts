import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig, NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../services/share-flight-details.service';
import { Flight } from '../model/Flight';
import { Observable } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.css'],
  providers: [NgbTypeaheadConfig, NgbCarouselConfig]
})
export class LandingPageComponentComponent implements OnInit {
  source: any;
  destination: any;
  date: any;
  flag1: any;
  flag2: any;
  flag3: any;
  flag4: any;
  flightSearchForm: FormGroup;
  smallForm: FormGroup;
  flight = new Flight();
  destinationText = '';
  showDropDown = false;
  states = ['Lima', 'Tokyo', 'Riyadh', 'Vienna', 'Shanghai', 'Taipei', 'Rome',
  'Milan', 'Amsterdam', 'Barcelona', 'Seoul', 'Hong Kong', ' Kuala Lumpur',
  'Istanbul', 'Hawaii', 'New York', 'Dubai', 'Singapore', 'Paris', 'Bangkok', 'London', 'Osaka', 'Barcelona',
  'Pattaya', 'Makkah', 'Phuket', 'Antalya', 'Bali', 'Osaka', 'Pattaya', 'Las Vegas',
  'San Francisco', 'Chicago', 'Seattle', 'Napa', 'Portland', 'Seattle', 'Mumbai', 'Kolkata',
  'Bangalore', 'Hyderabad', 'Delhi', 'Chennai', 'Jaipur', 'Philadelphia', 'Boise', 'Boston'];
  showDropDownDest = false;
  sourceModel: any;
  destinationModel: any;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private msgService: MessageService, configTy: NgbTypeaheadConfig,private config: NgbCarouselConfig) {
    this.flightSearchForm = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.smallForm = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.config.showNavigationArrows = false;
    this.config.showNavigationIndicators = false;

    configTy.showHint = true;
  }

  ngOnInit() {
  }

  searchSource = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : this.states.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10))
  )

  searchDestination = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : this.states.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10))
  )

  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  selectDestValue(value: any) {
    this.flightSearchForm.controls['destination'].setValue(value);
    this.destinationText = this.flightSearchForm.controls['destination'].value;
    this.showDropDownDest = false;
  }


  getSearchValueDest() {
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
    this.flight.eventName = '';
    this.flight.passengers = '';
  }

  onSubmit() {
    if (this.flightSearchForm.value.source === '') {
      this.flag1 = false;
      this.source = document.getElementById('source');
      this.source.setAttribute('style', 'border:red solid 2px;');
    } else {//(this.flightSearchForm.value.source !== '') {
      this.flag1 = true;
      this.source = document.getElementById('source');
      this.source.setAttribute('style', 'border:white solid 0px;');
    }
    
    if (this.flightSearchForm.value.destination === ''){
      this.flag2 = false;
      this.destination = document.getElementById('destination');
      this.destination.setAttribute('style', 'border:red solid 2px;');
    } else{
    // if (this.flightSearchForm.value.destination !== '') {
      this.flag2 = true;
      this.destination = document.getElementById('destination');
      this.destination.setAttribute('style', 'border:white solid 0px;');
    }
    if (this.flightSearchForm.value.date === undefined) {
      this.flag3 = false;
      this.date = document.getElementById('date');
      this.date.setAttribute('style', 'border:red solid 2px;');
    } else {
      this.flag3 = true;
      this.date = document.getElementById('date');
      this.date.setAttribute('style', 'border:white solid 0px;');
    }

    if (this.flightSearchForm.value.source === this.flightSearchForm.value.destination) {
      this.flag4 = false;
      this.source = document.getElementById('source');
      this.destination = document.getElementById('destination');
      this.source.setAttribute('style', 'border:red solid 2px;');
      this.destination.setAttribute('style', 'border:red solid 2px;');
    } else{
      this.flag4 = true;
      this.source = document.getElementById('source');
      this.destination = document.getElementById('destination');
      this.source.setAttribute('style', 'border:white solid 0px;');
      this.destination.setAttribute('style', 'border:white solid 0px;');
    }

    if (this.flag1 && this.flag2 && this.flag3 && this.flag4) {
      this.buildFlightObject();
      this.msgService.sendMessage(this.flight);
      localStorage.setItem('flight', JSON.stringify(this.flight));
      this.router.navigate(['/searchResults']);
    }
  }
}