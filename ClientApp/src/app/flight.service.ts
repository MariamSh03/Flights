import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TimePlaceRm {
  place: string;
  time: Date;
}

export interface FlightRm {
  airline: string;
  remainingNumberOfSeats: number; // Fix typo here
  departure: {
    place: string;
    time: Date;
  };
  arrival: { // Fix typo here
    place: string;
    time: Date;
  };
  price: number;
}
@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'https://localhost:7169/Flight';

  constructor(private http: HttpClient) { }

  searchFlights(): Observable<FlightRm[]> {
    return this.http.get<FlightRm[]>(this.apiUrl);
  }
}
