import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = environment.apiUrl;
  private http = inject(HttpClient);

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    });
  }

  registerUser(body: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, body, { headers: this.getHeaders() })
  }
  loginUser(body: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, body, { headers: this.getHeaders() })
  }
}
