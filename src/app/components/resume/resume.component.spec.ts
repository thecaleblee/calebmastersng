import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ResumeComponent } from './resume.component';
import { By } from '@angular/platform-browser';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('Should create the Resume component', () => {
    expect(component).toBeTruthy();
  });

  it('Section should have ID of "resume"', () => {
    const id = de.nativeElement.querySelector('section').attributes.getNamedItem("id").value;
    expect(id).toBe("resume");
  });

  it('Should have a H2 tag', () => {
    const h2 = de.queryAll(By.css('h2')).length;
    expect(h2).toBe(1);
  });

  it('H2 tag should contain the text "Resumé"', () => {
    const h2 = de.nativeElement.querySelector('h2');
    expect(h2.innerHTML).toContain('Resumé');
  });

  it('H2 should have a child Span tag', () => {
    const span = de.queryAll(By.css('h2 span')).length;
    expect(span).toBe(1);
  });

  it('H2 span should contain the text "Me as a piece of paper"', () => {
    const span = de.nativeElement.querySelector('h2 span');
    expect(span.innerHTML).toContain('Me as a piece of paper');
  });

  it('Should have an Article tag', () => {
    const span = de.queryAll(By.css('article')).length;
    expect(span).toBe(1);
  }); 

  it('Should have a Header with a H3 tag', () => {
    const h2 = de.queryAll(By.css('header h3')).length;
    expect(h2).toBe(1);
  });

  it('H3 tag should contain the text "Caleb Masters"', () => {
    const h3 = de.nativeElement.querySelector('h3');
    expect(h3.innerHTML).toContain('Caleb Masters');
  });

  it('Header Should have three P tags', () => {
    const pTag = de.queryAll(By.css('header p')).length;
    expect(pTag).toBe(3);
  });

  it('Header P tags should have text "Contact via Linkedin', () => {
    const pTag = de.nativeElement.querySelectorAll('header p')[0];
    expect(pTag.innerHTML).toContain('Contact via Linkedin');
  });
  it('Should have a H4 tag', () => {
    const h4 = de.queryAll(By.css('h4')).length;
    expect(h4).toBe(1);
  });

  it('H4 tag should contain the text "Summary"', () => {
    const h4 = de.nativeElement.querySelector('h4');
    expect(h4.innerHTML).toContain('Summary');
  });

  it('Summary section should have a p tag containing the text "Frontend engineer with 10+..."', () => {
    const pTag = de.nativeElement.querySelector('#resume article section p');
    expect(pTag.innerHTML).toContain('Frontend engineer with 10+');
  });
});
