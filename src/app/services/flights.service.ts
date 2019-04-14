import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../model/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flight = new Flight();
  constructor(private http: HttpClient) { }

  // createFlight(formData: any) {
  //   this.flight.source = formData.source;
  //   this.flight.destination = formData.destination;
  //   this.flight.date = formData.date;
  //   this.flight.flightname = formData.flightname;
  //   return  this.http.post('http://localhost:3000/createFlights', this.flight);
  // }

  // getFlight(flight: any) {
  //   return this.http.get('http://localhost:3000' + '/flights/' + flight.source + '/' + flight.password);
  // }

  // getFlightBySourceAndDestination(source: string, destination: string) {
  //   return this.http.get('http://localhost:3000' + '/flights/' + source + '/' + destination);
  // }

}
