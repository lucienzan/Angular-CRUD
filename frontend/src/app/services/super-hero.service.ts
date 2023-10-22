import { Injectable } from '@angular/core';
import { SuperHero } from '../models/suepr-hero';
import { HttpClient } from '@angular/common/http';
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
}
