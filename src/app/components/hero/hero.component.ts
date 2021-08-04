import { Component, OnInit, Input } from '@angular/core';
import { HERO } from '../../HeroData';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  heroData = HERO;
  // @Input() id: string = "hero";
  // @Input() tagline: string = "hero works";
  // @Input() emHeading: string = "emphasis text";
  // @Input() heading: string = "text";
  // @Input() listItems: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
