import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoCarb } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class HistoCarbService {
  // private baseUrl = 'http://localhost:8080/api/prix';
  // private baseUrl = 'http://backend:8080/api/prix';
  private baseUrl = '/api/prix';

  constructor(private http: HttpClient) {}


  getAll(): Observable<HistoCarb[]> {
    return this.http.get<HistoCarb[]>(this.baseUrl);
  }
  getAllFull(): Observable<HistoCarb[]> {
    return this.http.get<HistoCarb[]>(`${this.baseUrl}/full`);
  }

  getById(id: number): Observable<HistoCarb> {
  return this.http.get<HistoCarb>(`${this.baseUrl}/${id}`);
}


  getByStationCarburant(stationId: number, carburantId: number): Observable<HistoCarb[]> {
    return this.http.get<HistoCarb[]>(`${this.baseUrl}/stations/${stationId}/carburants/${carburantId}`);
  }


  add(stationId: number, carburantId: number, histoCarb: HistoCarb): Observable<HistoCarb> {
    return this.http.post<HistoCarb>(
      `${this.baseUrl}/stations/${stationId}/carburants/${carburantId}`,
      histoCarb
    );
  }


  update(id: number, histoCarb: HistoCarb): Observable<HistoCarb> {
    return this.http.put<HistoCarb>(`${this.baseUrl}/${id}`, histoCarb);
  }


  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }


  // filter frontend by city or station
filterByCity(histos: HistoCarb[], city: string): HistoCarb[] {
  return histos.filter(h => h.stationVille?.toLowerCase().includes(city.toLowerCase()));
}

filterByStation(histos: HistoCarb[], station: string): HistoCarb[] {
  return histos.filter(h => h.stationNom?.toLowerCase().includes(station.toLowerCase()));
}

}
