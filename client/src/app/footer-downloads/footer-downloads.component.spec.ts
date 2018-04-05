import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDownloadsComponent } from './footer-downloads.component';

describe('FooterDownloadsComponent', () => {
  let component: FooterDownloadsComponent;
  let fixture: ComponentFixture<FooterDownloadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterDownloadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
