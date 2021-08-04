import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { SkillsComponent } from './skills.component';
import { By } from '@angular/platform-browser';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Section should have ID of "skills"', () => {
    const id = de.nativeElement.querySelector('section').attributes.getNamedItem("id").value;
    expect(id).toBe("skills");
  });

  it('Should have an H2 tag', () => {
    const h2 = de.queryAll(By.css('h2')).length;
    expect(h2).toBe(1);
  });

  it('H2 tag should contain the text "skills heading"', () => {
    const pTag = de.nativeElement.querySelector('h2');
    expect(pTag.innerHTML).toContain('Skills');
  });

  it('H2 should have a child Span tag', () => {
    const span = de.queryAll(By.css('h2 span')).length;
    expect(span).toBe(1);
  });

  it('H2 span should contain the text "design to pixel perfect"', () => {
    const span = de.nativeElement.querySelector('h2 span');
    expect(span.innerHTML).toContain('design to pixel perfect');
  });

  it('Should have an Article tag', () => {
    const span = de.queryAll(By.css('article')).length;
    expect(span).toBe(1);
  });

  it('Article should have the Aria-Label "skill heading"', () => {
    const article = de.nativeElement.querySelector('article');
    expect(article.attributes.getNamedItem("aria-label").value).toBe("Skills");
  });

  it('Should have three H3 tags', () => {
    const span = de.queryAll(By.css('h3')).length;
    expect(span).toBe(3);
  });



});
