import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_END_POINTS } from '../../../Constants/ApiEndPoints';
import { IResponse } from '../../../Models/Base-Models/IResponse';

@Injectable({
  providedIn: 'root'
})
export class GetRelatedBusStopsService {

  constructor(private http: HttpClient) { }

  Execute() {
    return this.http.get<IResponse>(API_END_POINTS.getAllRElatedBusStops);
  }
}

