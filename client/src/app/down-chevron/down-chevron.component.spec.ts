import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownChevronComponent } from './down-chevron.component';

describe('DownChevronComponent', () => {
  let component: DownChevronComponent;
  let fixture: ComponentFixture<DownChevronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownChevronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownChevronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
