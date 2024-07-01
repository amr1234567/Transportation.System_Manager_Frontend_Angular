import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingTicketComponent } from './cutting-ticket.component';

describe('CuttingTicketComponent', () => {
  let component: CuttingTicketComponent;
  let fixture: ComponentFixture<CuttingTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuttingTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuttingTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
