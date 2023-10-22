import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroCreateComponent } from './components/create/hero-create/hero-create.component';
import { HeroListComponent } from './components/show/hero-list/hero-list.component';

const routes: Routes = [
  {path : 'create', component: HeroCreateComponent},
  {path : '', component: HeroListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
