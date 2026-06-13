import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carburant } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class CarburantService {
  // private baseUrl = 'http://localhost:8080/api/carburants';
  // private baseUrl = 'http://backend:8080/api/carburants';
  private baseUrl = 'api/carburants';

  constructor(private http: HttpClient) {}

  // Récupérer tous les carburants
  getAll(): Observable<Carburant[]> {
    return this.http.get<Carburant[]>(this.baseUrl);
  }

  // Récupérer un carburant par id
  get(id: number): Observable<Carburant> {
    return this.http.get<Carburant>(`${this.baseUrl}/${id}`);
  }

  // Créer un carburant
  create(carburant: Carburant): Observable<Carburant> {
    return this.http.post<Carburant>(this.baseUrl, carburant);
  }

  // Mettre à jour un carburant
  update(id: number, carburant: Carburant): Observable<Carburant> {
    return this.http.put<Carburant>(`${this.baseUrl}/${id}`, carburant);
  }

  // Supprimer un carburant
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
