import { Component, OnInit } from '@angular/core';
import { RESUME, Resume } from '../../ResumeData';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: Resume = RESUME;

  constructor() { }

  ngOnInit(): void {
  }
}
