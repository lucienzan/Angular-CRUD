import { Component } from '@angular/core';
import { SuperHeroService } from './services/super-hero.service';
import { SuperHero } from './models/suepr-hero';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroLists : SuperHero[] = [];
  constructor (private heroService : SuperHeroService){
  }
  
  ngOnInit() : void {
   this.heroLists = this.heroService.getSuperHeros();
    console.log(this.heroLists);
  }
}
