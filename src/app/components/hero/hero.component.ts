import { Component, OnInit, Input } from '@angular/core';
import { HERO, Hero } from '../../HeroData';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {


  heroData = HERO;
  /**
   * Ultimately the goal is to send the data in from the top most parent
   * For now the data coming in from above is fine.
   * TODO: Move data to app level
   */
  // @Input() id: string = "hero";
  // @Input() tagline: string = "hero works";
  // @Input() emHeading: string = "emphasis text";
  // @Input() heading: string = "text";
  // @Input() listItems: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
