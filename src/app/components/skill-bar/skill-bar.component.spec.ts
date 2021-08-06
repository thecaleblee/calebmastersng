import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { SkillBarComponent } from './skill-bar.component';
import { By } from '@angular/platform-browser';
import { SkillItem } from 'src/app/SkillsData';

describe('SkillBarComponent', () => {
  let component: SkillBarComponent;
  let fixture: ComponentFixture<SkillBarComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBarComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    const bar: SkillItem = {name: 'Skill', percent: '100%'};
    component.bar = bar;
    fixture.detectChanges();
  });

  it('Should create skill-bar component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a P element', () => {
    expect(de.queryAll(By.css('p')).length).toBe(1);
  });

  it('Skill Bar should contain the text "Skill"', () => {
    const pTag = de.nativeElement.querySelector('p span');
    expect(pTag.innerHTML).toBe('Skill');
  });

  it('Skill Bar should have the Aria-Label "Skill 100%"', () => {
    const pTag = de.nativeElement.querySelector('p');
    expect(pTag.attributes.getNamedItem("aria-label").value).toBe("Skill 100%");
  });
});
