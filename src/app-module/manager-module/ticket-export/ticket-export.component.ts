import { Component, OnInit } from '@angular/core';
import { GetTicketByIdService } from '../../../Services/Api-Services/get-Ticket/get-ticket-by-id.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReturnedTicketDto } from '../../../Models/Response-Models/ReturnedTicketDto';
import { IGenericResponse } from '../../../Models/Base-Models/IGenericResponse';
import { FILES_PATHS } from '../../../Constants/FilesPaths';

@Component({
  selector: 'app-ticket-export',
  templateUrl: './ticket-export.component.html',
  styleUrl: './ticket-export.component.scss'
})
export class TicketExportComponent implements OnInit {
  constructor(private getTicketService: GetTicketByIdService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.id = params["id"];
        this.id ?? this.router.navigate(["/main/journeys"]);
      }
    )
    this.getTicketService.Execute(this.id!).subscribe(
      (ticket: IGenericResponse<ReturnedTicketDto>) => {
        this.ticketDetails = ticket.body;
      }
    )
  }
  gpsIcon = FILES_PATHS.gpsICon;
  timeIcon = FILES_PATHS.timeIcon2;
  rightArrowIcon = FILES_PATHS.rightArrowIcon;
  ticketDetails?: ReturnedTicketDto;
  id?: string;
}
