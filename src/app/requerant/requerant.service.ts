import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Requerant } from '../model/requerant';

@Injectable({
  providedIn: 'root'
})
export class RequerantService {

  private apiUrl = 'http://localhost:8082/api/requerants'

  constructor(private http: HttpClient) { }

  getRequerants(): Observable<Requerant[]> {
    return this.http.get<Requerant[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRequerant(id: number): Observable<Requerant> {
    return this.http.get<Requerant>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createRequerant(requerant: Requerant): Observable<Requerant> {
    return this.http.post<Requerant>(this.apiUrl, requerant)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateRequerant(id: number, requerant: Requerant): Observable<Requerant> {
    return this.http.post<Requerant>(`${this.apiUrl}/${id}`, requerant)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteRequerant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'Une erreur est survenue';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client ou réseau
      errorMessage = "Erreur de l'opération"; // Correction de la faute de frappe
    } else {
      // Le backend a renvoyé un code de réponse d'échec
      errorMessage = `Code d'erreur: ${error.status}`; // Affiche le code d'erreur du backend
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}