import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketExportComponent } from './ticket-export.component';

describe('TicketExportComponent', () => {
  let component: TicketExportComponent;
  let fixture: ComponentFixture<TicketExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketExportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
