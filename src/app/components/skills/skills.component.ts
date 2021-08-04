import { Component, OnInit } from '@angular/core';
import { SKILLS, Skill } from 'src/app/SkillsData';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill = SKILLS;

  constructor() { }

  ngOnInit(): void {
  }
}
