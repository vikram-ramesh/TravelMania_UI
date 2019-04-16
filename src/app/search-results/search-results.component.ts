import { MessageService  } from '../services/share-flight-details.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  userSignedIn = false;
  constructor(private messageService: MessageService, private router: Router, private modalService: NgbModal) {
    this.message = this.messageService.getMessage() ? this.messageService.getMessage() : JSON.parse(localStorage.getItem('flight'));
  }

  ngOnInit() {
    console.log(this.message);
    if (sessionStorage.length > 0) {
      this.userSignedIn = true;
    }
  }

  checkLogin(testModal) {
    if (this.userSignedIn) {
      this.router.navigate(['/events']);
    } else {
     this.openModal(testModal);
    }
  }

  openModal(testModal){
    this.modalService.open(testModal, {centered: true}).result.then((result) => {
      if (result === 'yes') {
        this.router.navigate(['/login']);
      } else {
        console.log('no');
      }
    });
  }

}
