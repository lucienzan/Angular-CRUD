import { Injectable } from '@angular/core';
import { SuperHero } from '../models/suepr-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }
  
  public getSuperHeros() : SuperHero[] {
    let hero = new SuperHero();
    hero.id = 1;
    hero.firstName = "Peter";
    hero.lastName = "Parker";
    hero.fullName = "Peter Parker";
    hero.power = "spier web";
    hero.place = "New York City";
    return [hero];
    }
}
