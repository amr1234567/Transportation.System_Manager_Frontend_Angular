import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneysComponent } from './journeys.component';

describe('JourneysComponent', () => {
  let component: JourneysComponent;
  let fixture: ComponentFixture<JourneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JourneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
