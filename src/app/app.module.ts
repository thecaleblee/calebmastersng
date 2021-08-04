import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ResumeComponent } from './components/resume/resume.component';
import { RecentComponent } from './components/recent/recent.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillBarComponent,
    HeroComponent,
    SkillsComponent,
    ResumeComponent,
    RecentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    SkillBarComponent,
    CardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
