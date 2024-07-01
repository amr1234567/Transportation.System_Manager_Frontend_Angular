import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_END_POINTS } from '../../../Constants/ApiEndPoints';

@Injectable({
  providedIn: 'root'
})
export class GetAllTicketsService {

  constructor(private http: HttpClient) { }

  Execute() {
    return this.http.get(API_END_POINTS.GetAllTickets);
  }
}
