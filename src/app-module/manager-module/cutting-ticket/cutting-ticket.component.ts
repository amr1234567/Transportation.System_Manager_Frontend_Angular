import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeatDto, UpcomingJourney } from '../../../Models/Response-Models/UpComingJourney';
import { GetJourneyByIdService } from '../../../Services/Api-Services/Get-Journey/get-journey-by-id.service';
import { IGenericResponse } from '../../../Models/Base-Models/IGenericResponse';
import { ResponseWithErrors } from '../../../Models/Response-Models/ResponseWithError';
import { FILES_PATHS } from '../../../Constants/FilesPaths';
import { CutTicketService } from '../../../Services/Api-Services/Cut-Ticket/cut-ticket.service';
import { TicketDto } from '../../../Models/Response-Models/Ticket';
import { ReturnedTicketDto } from '../../../Models/Response-Models/ReturnedTicketDto';

@Component({
  selector: 'app-cutting-ticket',
  templateUrl: './cutting-ticket.component.html',
  styleUrl: './cutting-ticket.component.scss'
})
export class CuttingTicketComponent implements OnInit {

  halfPoint?: number;
  constructor(private route: ActivatedRoute, private router: Router, private getJourney: GetJourneyByIdService, private cutTicketService: CutTicketService) { }
  timeIcon = FILES_PATHS.timeIcon;
  SelectedSeatImage = FILES_PATHS.SelectedSeat;
  NotAvailableSeatImage = FILES_PATHS.NotAvailableSeat;
  AvailableSeat = FILES_PATHS.AvailableSeat;
  selectedSeat?: SeatDto;
  journeyId?: string;
  Journey?: UpcomingJourney;
  FailedMessage?: string | null;
  CuttingInProgress = false;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.journeyId = params["id"];
      console.log(this.journeyId);
    });
    this.getJourney.Execute(this.journeyId).subscribe(
      (response: IGenericResponse<UpcomingJourney>) => {
        this.Journey = response.body;
        this.Journey?.seats.sort((a, b) => a.seatNum - b.seatNum);
        const seatsLength = this.Journey?.seats.length ?? 0;
        this.halfPoint = parseInt((seatsLength / 2).toString());
      }, (resError: ResponseWithErrors) => {
        console.log(resError);
      }
    )
  }
  SetSelectedSeat(seat: SeatDto): void {
    this.selectedSeat = seat.isAvailable ? seat : this.selectedSeat;
  }
  CutTicket() {
    this.CuttingInProgress = true;
    this.FailedMessage = null;
    if (this.selectedSeat) {
      const Ticket: TicketDto = {
        journeyId: this.journeyId ?? "",
        seatId: this.selectedSeat.seatId
      }
      this.cutTicketService.Execute(Ticket).subscribe(
        (response: IGenericResponse<ReturnedTicketDto>) => {
          this.CuttingInProgress = false;
          this.router.navigate(["/main/ticket/", response.body?.ticketId])
        }, (err: ResponseWithErrors) => {
          this.FailedMessage = err.message;
        }
      )
    } else {
      this.FailedMessage = "Can't cut non-available seat";
    }
    this.CuttingInProgress = false;
  }
}
