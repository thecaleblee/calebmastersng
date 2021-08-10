import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { HeroComponent } from './hero.component';
import { By } from '@angular/platform-browser';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('Should create hero component', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a Section element', () => {
    expect(de.queryAll(By.css('section')).length).toBe(1);
  });
  
  it('Should have ID of "hero"', () => {
    const id = de.nativeElement.querySelector('section').attributes.getNamedItem("id").value;
    expect(id).toBe("hero");
  });

  describe('H1', () => {
    it('Should have a H1 element', () => {
      expect(de.queryAll(By.css('h1')).length).toBe(1);
    });

    it('Should have a child P tag', () => {
      const pTag = de.queryAll(By.css('h1 p')).length;
      expect(pTag).toBe(1);
    });
    it('Child P tag Should contain the text "Portfolio for"', () => {
      const pTag = de.nativeElement.querySelector('h1 p');
      expect(pTag.innerHTML).toBe('Portfolio for');
    });

    it('Should have a child Span tag', () => {
      const span = de.queryAll(By.css('h1 span')).length;
      expect(span).toBe(1);
    });

    it('Child Span tag Should contain the text "Caleb"', () => {
      const pTag = de.nativeElement.querySelector('h1 span');
      expect(pTag.innerHTML).toBe('Caleb');
    });
  });

  describe('UL', () => {
    it('Should have an UL element', () => {
      expect(de.queryAll(By.css('ul')).length).toBe(1);
    });

    it('Should have at least one li with the text "Front-End Engineer"', () => {
      const listItem = de.nativeElement.querySelectorAll('ul li')[0];
      expect(listItem.innerHTML).toBe('Front-End Engineer.');
    });

    it('Should have three list items', () => {
      const listItem = de.nativeElement.querySelectorAll('ul li').length;
      expect(listItem).toBe(3);
    });
  });

  describe('Hero Link', () => {
    it('Should have a link element', () => {
      expect(de.queryAll(By.css('a')).length).toBe(1);
    });

    it('Link Should have the text "View Code on Github"', () => {
      const listItem = de.nativeElement.querySelectorAll('.github')[0];
      expect(listItem.innerHTML).toContain('View Code on Github');
    });

    it('Should have an Image element', () => {
      expect(de.queryAll(By.css('img')).length).toBe(1);
    });

    it('Should have a cloudinary url', () => {
      const url = de.nativeElement.querySelector('img').attributes.getNamedItem("src").value;
      expect(url).toContain("cloudinary");
    });
  });
});
