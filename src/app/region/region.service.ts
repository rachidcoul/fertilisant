import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Region } from '../model/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrl = 'http://localhost:8082/api/regions'
  
  constructor(
    private http: HttpClient
  ) { }

  // getRegions(): Observable<Region[]> {
  //   return this.http.get<Region[]>(this.apiUrl)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // la fonction getRegions pour faire la pagination
  getRegions(page: number=0, size: number=5): Observable<any> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get<any>(this.apiUrl, { params })
      .pipe(
        catchError(this.handleError)
      );
  }



  getRegion(id: number): Observable<Region> {
    return this.http.get<Region>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createRegion(region: Region): Observable<Region> {
    return this.http.post<Region>(this.apiUrl, region)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateRegion(id: number, region: Region): Observable<Region> {
    return this.http.post<Region>(`${this.apiUrl}/${id}`, region)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteRegion(id: number): Observable<void> {
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
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

}
