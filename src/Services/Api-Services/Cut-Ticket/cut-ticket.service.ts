import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../../../Models/Base-Models/IResponse';
import { API_END_POINTS } from '../../../Constants/ApiEndPoints';
import { TicketDto } from '../../../Models/Response-Models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class CutTicketService {

  constructor(private http: HttpClient) { }
  Execute(ticket: TicketDto) {
    return this.http.post<IResponse>(API_END_POINTS.CutTicket, ticket);
  }
}
