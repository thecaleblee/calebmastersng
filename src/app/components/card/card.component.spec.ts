import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CardComponent } from './card.component';
import { Site } from 'src/app/RecentData';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    const site: Site = {
      link: 'https://calebmasters.dev', 
      background:
      'https://res.cloudinary.com/calebmastersdev/image/upload/v1620844282/cmdev/bluehost_bc3c2l.jpg',
      heading: 'Bluehost.com',
      subheading: 'Tech Stack:',
      techStack: [
        { name: 'React/Next.js' },
        { name: 'SCSS' },
        { name: 'Styled Components' },
        { name: 'Contentful' },
        { name: 'Enzyme' },
        { name: 'Optimizely' },
        { name: 'AWS' },
        { name: 'Bitbucket' },
        { name: 'Confluence' },
        { name: 'Jira' },
      ],
      description:
        'Created React components for an in house framework based on Next.js to allow pages to be generated dynamically using Contentful as a CMS.',
    };
    component.site = site;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a Article tag', () => {
    const article = de.queryAll(By.css('article')).length;
    expect(article).toBe(1);
  });

  it('Should have a H3 tag', () => {
    const h3 = de.queryAll(By.css('h3')).length;
    expect(h3).toBe(1);
  });

  it('H3 tag should contain the text "Bluehost.com"', () => {
    const h3 = de.nativeElement.querySelector('h3');
    expect(h3.innerHTML).toContain("Bluehost.com");
  });

  it('Should have a H4 tag', () => {
    const h4 = de.queryAll(By.css('h4')).length;
    expect(h4).toBe(1);
  });

  it('H4 tag should contain the text "Tech Stack"', () => {
    const h4 = de.nativeElement.querySelector('h4');
    expect(h4.innerHTML).toContain("Tech Stack");
  });

  it('Should have 10 italics tags', () => {
    const iTag = de.queryAll(By.css('i')).length;
    expect(iTag).toBe(10);
  });
});
