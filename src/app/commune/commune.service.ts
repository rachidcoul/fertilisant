import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Commune } from '../model/commune';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {
  private apiUrl='http://localhost:8082/api/communes'

  constructor(private http:HttpClient) { }

 getCommunes(): Observable<Commune[]> {
   return this.http.get<Commune[]>(this.apiUrl)
     .pipe(
       catchError(this.handleError)
     );
 }

 getCommune(id: number): Observable<Commune> {
   return this.http.get<Commune>(`${this.apiUrl}/${id}`)
     .pipe(
       catchError(this.handleError)
     );
 }

 createCommune(commune: Commune): Observable<Commune> {
   return this.http.post<Commune>(this.apiUrl, commune)
     .pipe(
       catchError(this.handleError)
     );
 }

 updateCommune(id: number, commune: Commune): Observable<Commune> {
   return this.http.post<Commune>(`${this.apiUrl}/${id}`, commune)
     .pipe(
       catchError(this.handleError)
     );
 }

 deleteCommune(id: number): Observable<void> {
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
     errorMessage = "Code d'erreur:0000" ;
   }
   //console.error(errorMessage);
   return throwError(() => new Error(errorMessage));
 }
}
