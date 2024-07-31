import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  searchResult: FlightRm[] = [
    {
      airline: "American Airlines",
      remainingNuimberOfSeats: 500,
      departure: { time: new Date().toString(), place: "Los Angeles" },
      arival: { time: new Date().toString(), place: "Istanbul" },
      price: "350",
    },
    {
      airline: "Turkish Airlines",
      remainingNuimberOfSeats: 300,
      departure: { time: new Date().toString(), place: "Ankara" },
      arival: { time: new Date().toString(), place: "Istanbul" },
      price: "200",
    },
    {
      airline: "Lufthansa",
      remainingNuimberOfSeats: 400,
      departure: { time: new Date().toString(), place: "Berlin" },
      arival: { time: new Date().toString(), place: "Frankfurt" },
      price: "250",
    },
    {
      airline: "Turkish Airlines",
      remainingNuimberOfSeats: 150,
      departure: { time: new Date().toString(), place: "Antalya" },
      arival: { time: new Date().toString(), place: "Izmir" },
      price: "180",
    },
    {
      airline: "Lufthansa",
      remainingNuimberOfSeats: 350,
      departure: { time: new Date().toString(), place: "Düsseldorf" },
      arival: { time: new Date().toString(), place: "Munich" },
      price: "220",
    }
  ];

  constructor() { }

  ngOnInit(): void {
   
  }

}

export interface FlightRm {
  airline: string;
  arival: TimePlaceRm;
  departure: TimePlaceRm;
  price: string;
  remainingNuimberOfSeats: number;

}

export interface TimePlaceRm {
  place: string;
  time: string;
}
