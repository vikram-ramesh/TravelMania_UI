import { MessageService  } from '../services/share-flight-details.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  flights: any = [];
  userSignedIn = false;
  flightSearchForm: FormGroup;

  constructor(private messageService: MessageService, private router: Router,
              private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.message = this.messageService.getMessage() ? this.messageService.getMessage() : JSON.parse(localStorage.getItem('flight'));

    this.flightSearchForm = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log(this.message);
    if (sessionStorage.getItem('User')) {
      this.userSignedIn = true;
    }
  }

  checkEvents(testModal: any) {
    if (this.userSignedIn) {
      this.router.navigate(['/events']);
    } else {
     this.openModal(testModal);
    }
  }

  openModal(testModal: any) {
    this.modalService.open(testModal, {centered: true}).result.then((result) => {
      if (result === 'yes') {
        this.router.navigate(['/login']);
      } else {
        console.log('no');
      }
    });
  }

  bookFlight(testModal: any) {
    if(this.userSignedIn) {
      this.router.navigate(['/passengerDetails']);
    } else {
      this.openModal(testModal);
    }
  }

}
