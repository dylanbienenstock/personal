import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSectionScreenshotComponent } from './projects-section-screenshot.component';

describe('ProjectsSectionScreenshotComponent', () => {
  let component: ProjectsSectionScreenshotComponent;
  let fixture: ComponentFixture<ProjectsSectionScreenshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsSectionScreenshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSectionScreenshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
