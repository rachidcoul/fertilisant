import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Province } from '../model/province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  private apiUrl='http://localhost:8082/api/provinces'
    
  constructor(private http:HttpClient) { }

  getProvinces(): Observable<Province[]> {
    return this.http.get<Province[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProvince(id: number): Observable<Province> {
    return this.http.get<Province>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createProvince(province: Province): Observable<Province> {
    return this.http.post<Province>(this.apiUrl, province)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateProvince(id: number, province: Province): Observable<Province> {
    return this.http.post<Province>(`${this.apiUrl}/${id}`, province)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteProvince(id: number): Observable<void> {
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
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }


}
