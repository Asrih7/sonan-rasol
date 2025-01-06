import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class D1Service {
  private data = 'assets/d1.json'; 

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.data);
  }
}