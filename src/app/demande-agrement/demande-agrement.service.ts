import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DemandeAgrement } from '../model/demande-agrement';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeAgrementService {

  private apiUrl = 'http://localhost:8082/api/demandeAgrements'
  constructor(private http: HttpClient) { }

  getDemandeAgrements(): Observable<DemandeAgrement[]> {
    return this.http.get<DemandeAgrement[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getDemandeAgrement(id: number): Observable<DemandeAgrement> {
    return this.http.get<DemandeAgrement>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createDemandeAgrement(demandeAgrement: DemandeAgrement): Observable<DemandeAgrement> {
       return this.http.post<DemandeAgrement>(this.apiUrl, demandeAgrement)
         .pipe(
           catchError(this.handleError)
         );
     }

     updateDemandeAgrement(id: number, demandeAgrement: DemandeAgrement): Observable<DemandeAgrement> {
      return this.http.post<DemandeAgrement>(`${this.apiUrl}/${id}`, demandeAgrement)
        .pipe(
          catchError(this.handleError)
        );
    }
  
    deleteDemandeAgrement(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`)
        .pipe(
          catchError(this.handleError)
        );
    }
  
    private handleError(error: any) {
      let errorMessage = 'Une erreur est survenue';
      if (error.error instanceof ErrorEvent) {
        // Erreur côté client ou réseau
        errorMessage = "Erreur de l'operation";
      } else {
        // Le backend a renvoyé un code de réponse d'échec
        errorMessage = "Code d'erreur:0000";
      }
      //console.error(errorMessage);
      return throwError(() => new Error(errorMessage));
    }
}
