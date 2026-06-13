import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  // private baseUrl = 'http://localhost:8080/api/stations';
  // private baseUrl = 'http://backend:8080/api/stations';
  private baseUrl = '/api/stations';


  constructor(private http: HttpClient) {}

  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(this.baseUrl);
  }

  getStation(id: number): Observable<Station> {
    return this.http.get<Station>(`${this.baseUrl}/${id}`);
  }



  addStation(station: Station): Observable<Station> {
  return this.http.post<Station>(
    this.baseUrl,
    station,
    { headers: { 'Content-Type': 'application/json' } }
  );
}


  updateStation(id: number, station: Station): Observable<Station> {
    return this.http.put<Station>(`${this.baseUrl}/${id}`, station);
  }

  deleteStation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
