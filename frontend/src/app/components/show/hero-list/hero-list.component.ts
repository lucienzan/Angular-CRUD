import { Component } from '@angular/core';
import { SuperHeroService } from './../../../services/super-hero.service';
import { SuperHero } from './../../../models/suepr-hero';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

  heroLists : SuperHero[] = [];
  UpdateHero: any;
  statusCheck!: number;
  
  constructor
  (
  private heroService : SuperHeroService,
  private fb : FormBuilder,
  )
  {
    this.UpdateHero = fb.group(
      {
      id:'',
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
    return this.UpdateHero.controls
  };
  
    ngOnInit() : void {
    this.heroService
    .getSuperHeros()
    .subscribe({
      next: (data) : void => {
        this.heroLists = data;    
      }
      });
    }
    
    openModal(obj : any) : void {
      let modalWindow = document.getElementById("exampleModal");
      this.heroService.getSuperHero(obj.id).subscribe
      ((hero: any) => {
        this.statusCheck = hero.status;
        this.UpdateHero.patchValue(hero.heroModel)
      });
      
      if(modalWindow != null && this.UpdateHero != null) 
      {
        modalWindow.style.display = 'block';
      }
    }
    
    closeModal() : void {
      let modalWindow = document.getElementById("exampleModal");
      if(modalWindow != null) 
      {
        modalWindow.style.display = 'none';
      }
    }
    
    OnSubmit() : void {
      let model : SuperHero = this.UpdateHero.value;
      this.heroService.updateSuperHero(model).subscribe((response) => {
        // Close the modal after successful update
        this.closeModal();
    
        // Optionally, update the hero's data in your local heroLists array
        const index = this.heroLists.findIndex((hero) => hero.id === response.id);
        if (index !== -1) {
          this.heroLists[index] = { ...response };
        }
      });
    }
}
