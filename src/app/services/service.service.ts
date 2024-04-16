import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = "https://localhost:7148/api/Product"
  constructor(
    private http:HttpClient
  ) { }
  getall() : Observable<any>{
    return this.http.get(this.url)
  }
}
