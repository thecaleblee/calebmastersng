import { Component, OnInit } from '@angular/core';
import { RECENT, Recent } from '../../RecentData';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss'],
})
export class RecentComponent implements OnInit {
  recent: Recent = RECENT;

  constructor() {}

  ngOnInit(): void {}
}
