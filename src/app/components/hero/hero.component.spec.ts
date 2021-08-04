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

  it('should create hero component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Section element', () => {
    expect(de.queryAll(By.css('section')).length).toBe(1);
  });
  
  it('Section should have ID of "hero"', () => {
    const id = de.nativeElement.querySelector('section').attributes.getNamedItem("id").value;
    expect(id).toBe("hero");
  });

  it('should have a H1 element', () => {
    expect(de.queryAll(By.css('h1')).length).toBe(1);
  });

  it('H1 should have a child P tag', () => {
    const pTag = de.queryAll(By.css('h1 p')).length;
    expect(pTag).toBe(1);
  });

  it('Child P tag should contain the text "Hero Works"', () => {
    const pTag = de.nativeElement.querySelector('h1 p');
    expect(pTag.innerHTML).toBe('hero works');
  });

  it('H1 should have a child Span tag', () => {
    const span = de.queryAll(By.css('h1 span')).length;
    expect(span).toBe(1);
  });

  it('Child Span tag should contain the text "emphasis text"', () => {
    const pTag = de.nativeElement.querySelector('h1 span');
    expect(pTag.innerHTML).toBe('emphasis text');
  });

  it('should have an UL element', () => {
    expect(de.queryAll(By.css('ul')).length).toBe(1);
  });

  it('UL should have at least one li with the text "list item"', () => {
    const listItem = de.nativeElement.querySelectorAll('ul li')[0];
    expect(listItem.innerHTML).toBe('Front-End Engineer.');
  });
  it('UL should have three list items', () => {
    const listItem = de.nativeElement.querySelectorAll('ul li').length;
    expect(listItem).toBe(3);
  });
});
