import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService  } from '../services/share-flight-details.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  isLoggedIn = false;
  isRegistered = false;
  shortFilmRegistered: boolean;
  magicRegistered: boolean;
  puppetRegistered: boolean;
  gameRegistered: boolean;
  potteryRegistered: boolean;
  karaokeRegistered: boolean;
  message: any;

  constructor(private messageService: MessageService, private modalService: NgbModal, private router: Router) {
    this.message = this.messageService.getMessage() ? this.messageService.getMessage() : JSON.parse(localStorage.getItem('flight'));
  }

  ngOnInit() {
    if (sessionStorage.getItem('User')) {
      if (sessionStorage.getItem('event')) {this.flagSettings(sessionStorage.getItem('event')); }
      this.isLoggedIn = true;
    } else {
      this.router.navigate(['/login']);
    }
  }

  flagSettings(eventName) {
    switch (eventName) {
      case 'shortFilm': this.shortFilmRegistered = !this.shortFilmRegistered;
                        break;
      case 'magic': this.magicRegistered = !this.magicRegistered;
                    break;
      case 'puppet': this.puppetRegistered = !this.puppetRegistered;
                     break;
      case 'game': this.gameRegistered = !this.gameRegistered;
                   break;
      case 'pottery': this.potteryRegistered = !this.potteryRegistered;
                      break;
      case 'karaoke': this.karaokeRegistered = !this.karaokeRegistered;
                      break;

    }
  }

  warnUser(testModal: any) {
    if (sessionStorage.getItem('event')) {
      this.message.eventName = sessionStorage.getItem('event');
      this.messageService.sendMessage(this.message);
      localStorage.setItem('flight', JSON.stringify(this.message));
      this.router.navigate(['/passengerDetails']);
    } else {
      this.modalService.open(testModal, {centered: true}).result.then((result) => {
        if (result === 'yes') {
          this.router.navigate(['/passengerDetails']);
        } else {
          console.log('no');
        }
      });
    }
  }

  registerEvent(eventModal: any, eventModalError: any, eventName: string) {
    if (sessionStorage.getItem('event')) {
      this.modalService.open(eventModalError, {centered: true}).result.then((result) => {
        if (result === 'yes') {}
      });
    } else {
      this.modalService.open(eventModal, {centered: true}).result.then((result) => {
        if (result === 'yes') {
          sessionStorage.setItem('event', eventName);
          this.flagSettings(eventName);
        } else {
          console.log('no');
        }
      });
    }
  }

  deregisterEvent(eventDeregiModal: any, eventName: string) {
    this.modalService.open(eventDeregiModal, {centered: true}).result.then((result) => {
      if (result === 'yes') {
        sessionStorage.removeItem('event');
        this.flagSettings(eventName);
      } else {
        console.log('no');
      }
    });
  }
}
