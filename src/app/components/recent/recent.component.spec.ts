import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RecentComponent } from './recent.component';

describe('RecentComponent', () => {
  let component: RecentComponent;
  let fixture: ComponentFixture<RecentComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Section should have ID of "recent"', () => {
    const id = de.nativeElement.querySelector('section').attributes.getNamedItem("id").value;
    expect(id).toBe("recent");
  });

  it('Should have a H2 tag', () => {
    const h2 = de.queryAll(By.css('h2')).length;
    expect(h2).toBe(1);
  });

  it('H2 tag should contain the text "Projects I\'ve Worked On Recently"', () => {
    const pTag = de.nativeElement.querySelector('h2');
    expect(pTag.innerHTML).toContain("Projects I've Worked On Recently");
  });
});
