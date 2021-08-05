import { Component, Input, OnInit } from '@angular/core';
import { Site } from '../../RecentData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() site!: Site;

  constructor() { }

  ngOnInit(): void {
  }
}
