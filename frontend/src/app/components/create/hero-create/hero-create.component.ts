import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperHero } from 'src/app/models/suepr-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent {

  CreateHero : any ;

  constructor
  (
  private router : Router,
  private fb : FormBuilder,
  private service : SuperHeroService
  ) 
  {
    this.CreateHero = fb.group(
      {
      firstName : ['',[
        Validators.required
      ]],
      lastName: ['',[
        Validators.required
      ]],
      fullName : ['',[
        Validators.required
      ]],
      power : ['',[
        Validators.required
      ]],
      place: ['',[
        Validators.required
      ]],
      }
    )
  }
  
  get fc () {
    return this.CreateHero.controls
  };
  
  ToCancel() : void {
    this.router.navigate(['']);
  }
  
  OnSubmit() : void {
  let obj : SuperHero = this.CreateHero.value;
  this.service.createSuperHeros(obj).subscribe((heros: boolean)=> console.log(heros));
  }
}
