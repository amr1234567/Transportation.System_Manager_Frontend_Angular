import { Component, OnInit } from '@angular/core';
import { GetAllTicketsService } from '../../../Services/Api-Services/get-all-tickets/get-all-tickets.service';
import { ReturnedTicketDto } from '../../../Models/Response-Models/ReturnedTicketDto';
import { IGenericResponse } from '../../../Models/Base-Models/IGenericResponse';

@Component({
  selector: 'app-get-all-tickets',
  templateUrl: './get-all-tickets.component.html',
  styleUrl: './get-all-tickets.component.scss'
})
export class GetAllTicketsComponent implements OnInit {
  ngOnInit(): void {
    this.getALlTickets.Execute().subscribe(
      (result: IGenericResponse<ReturnedTicketDto[]>) => {
        this.tickets = result.body;
      }
    )
  }
  constructor(private getALlTickets: GetAllTicketsService) { }
  tickets?: ReturnedTicketDto[];
}
