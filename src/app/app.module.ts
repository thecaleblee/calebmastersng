import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillBarComponent,
    HeroComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    SkillBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
