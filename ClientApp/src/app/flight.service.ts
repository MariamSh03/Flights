import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TimePlaceRm {
  place: string;
  time: Date;
}

export interface FlightRm {
  id: string;
  airline: string;
  price: string;
  departure: TimePlaceRm;
  arrival: TimePlaceRm;
  remainingNumberOfSeats: number;
}

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'https://localhost:7169/Flight'; // Your API base URL

  constructor(private http: HttpClient) { }

  searchFlights(): Observable<FlightRm[]> {
    return this.http.get<FlightRm[]>(this.apiUrl);
  }
}
