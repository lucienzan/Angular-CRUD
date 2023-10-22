import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroCreateComponent } from './components/create/hero-create/hero-create.component';
import { HeroListComponent } from './components/show/hero-list/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroCreateComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
