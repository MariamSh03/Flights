import { Component, OnInit } from '@angular/core';
import { FlightService, FlightRm } from '../flight.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  searchResult: FlightRm[] = []; // Define the searchResult property

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    // Fetch flight data and assign it to searchResult
    this.flightService.searchFlights().subscribe(data => {
      this.searchResult = data;
    });
  }
}
