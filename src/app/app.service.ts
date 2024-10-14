
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserData } from './models/Users';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient){
  }
  saveData(userData:UserData): Observable<UserData> {
    return this.http.post<any>('https://anarish-website-v3.vercel.app/users',userData)
      .pipe(
        catchError(this.handleError)
      );
  }
  sendMail(userData:UserData): Observable<UserData> {
    return this.http.post<any>('https://anarish-website-v3.vercel.app/sendmail',userData)
      .pipe(
        catchError(this.handleError)
      );
  } 
  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
