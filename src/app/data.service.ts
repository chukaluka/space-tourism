import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<any> {
    return this.http.get<any>(this.dataUrl)
  }

}
