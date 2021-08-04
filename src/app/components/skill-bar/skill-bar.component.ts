import { Component, Input, OnInit } from '@angular/core';
import { SkillItem } from '../../SkillsData';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
})
export class SkillBarComponent implements OnInit {

  @Input() bar! : SkillItem;

  constructor() { 
  }

  ngOnInit(): void{
  }
}
