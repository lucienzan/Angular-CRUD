import { Injectable } from '@angular/core';
import { SuperHero } from '../models/suepr-hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private baseUrl : string = 'https://localhost:7120/api';
  constructor(private http : HttpClient) { }
  
  public getSuperHeros() : Observable<SuperHero[]> 
  {
    const getHeroList = `${this.baseUrl}/superHeros`;
    return this.http.get<SuperHero[]>(getHeroList);
  }
  
  public createSuperHeros(obj : SuperHero) : Observable<boolean> 
  {
    const createHero = `${this.baseUrl}/SuperHeros/Create`;
    return this.http.post<boolean>(createHero, obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
  });
  }
}
