import { NgModule } from '@angular/core';
import { AddingJourneyComponent } from './adding-journey/adding-journey.component';
import { CuttingTicketComponent } from './cutting-ticket/cutting-ticket.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavLayerComponent } from './nav-layer/nav-layer.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GetRelatedBusStopsService } from '../../Services/Api-Services/Get-Related-Bus-Stops/get-related-bus-stops.service';
import { CreateJourneyService } from '../../Services/Api-Services/Create-Journey/create-journey.service';
import { CutTicketService } from '../../Services/Api-Services/Cut-Ticket/cut-ticket.service';
import { CreateBusService } from '../../Services/Api-Services/Create-Bus/create-bus.service';
import { DateTimeValidatorDirective } from '../../Services/Validators/Date-Time-Validator/date-time-validator.directive';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { JourneysComponent } from './journeys/journeys.component';
import { GetJourneyByIdService } from '../../Services/Api-Services/Get-Journey/get-journey-by-id.service';
import { GetJourneysService } from '../../Services/Api-Services/Get-Journeys/get-journeys.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { EgyptianPoundPipe } from '../../Services/Helper-Services/Egyption-Pipe-Format/egyption-pipe-format.pipe';
import { TicketExportComponent } from './ticket-export/ticket-export.component';
import { GetTicketByIdService } from '../../Services/Api-Services/get-Ticket/get-ticket-by-id.service';
import { GetAllTicketsComponent } from './get-all-tickets/get-all-tickets.component';
import { GetAllTicketsService } from '../../Services/Api-Services/get-all-tickets/get-all-tickets.service';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AddingJourneyComponent,
    CuttingTicketComponent,
    NavLayerComponent,
    DateTimeValidatorDirective,
    JourneysComponent,
    EgyptianPoundPipe,
    TicketExportComponent,
    GetAllTicketsComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [
    GetRelatedBusStopsService,
    CreateJourneyService,
    CutTicketService,
    CreateBusService,
    GetJourneyByIdService,
    GetJourneysService,
    GetTicketByIdService,
    GetAllTicketsService
  ],
  exports: [
    AddingJourneyComponent,
    CuttingTicketComponent,
    NavLayerComponent,
    JourneysComponent,
    TicketExportComponent,
    GetAllTicketsComponent,
    TicketComponent
  ]
})

export class ManagerModule { }
