import { Component } from '@angular/core';
import { SuperHeroService } from './../../../services/super-hero.service';
import { SuperHero } from './../../../models/suepr-hero';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

  heroLists : SuperHero[] = [];
  constructor (private heroService : SuperHeroService){
  }
  ngOnInit() : void {
    this.heroService
    .getSuperHeros()
    .subscribe({
      next: (data) : void => {
        this.heroLists = data;    
      }
      });
    }
}
