import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNoteComponent } from './footer-note.component';

describe('FooterNoteComponent', () => {
  let component: FooterNoteComponent;
  let fixture: ComponentFixture<FooterNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
