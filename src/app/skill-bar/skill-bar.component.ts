import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
})
export class SkillBarComponent implements OnInit {

  @Input('name') name : string = 'Skill';
  @Input('percent') percent : string = '100%';

  constructor() { 
  }

  ngOnInit(): void{
    name: this.name;
    percent: this.percent;
  }
}
