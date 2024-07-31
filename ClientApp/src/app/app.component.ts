import { Component,  OnInit } from '@angular/core';
import { FlightService, FlightRm } from './flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  flights: FlightRm[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flightService.searchFlights().subscribe(data => {
      this.flights = data;
    });
  }
}
