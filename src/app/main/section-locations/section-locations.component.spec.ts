import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLocationsComponent } from './section-locations.component';

describe('SectionLocationsComponent', () => {
  let component: SectionLocationsComponent;
  let fixture: ComponentFixture<SectionLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionLocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
