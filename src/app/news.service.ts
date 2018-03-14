import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NewsService {

  constructor(
    private http: HttpClient,
    private newsService: NewsService) { }

  apiCallHandler(url) :Observable<string[]>{
    return this.http.get<string[]>(url);
  }
}
