import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_END_POINTS } from '../../../Constants/ApiEndPoints';

@Injectable({
  providedIn: 'root'
})
export class GetTicketByIdService {

  constructor(private http: HttpClient) { }
  Execute(id: string) {
    return this.http.get(API_END_POINTS.GetTicket + `/${id}`);
  }
}
