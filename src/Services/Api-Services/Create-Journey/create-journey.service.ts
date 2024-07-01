import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JourneyDto } from '../../../Models/Response-Models/JourneyDto';
import { API_END_POINTS } from '../../../Constants/ApiEndPoints';
import { IResponse } from '../../../Models/Base-Models/IResponse';

@Injectable({
  providedIn: 'root'
})
export class CreateJourneyService {

  constructor(private http: HttpClient) { }

  Execute(model: JourneyDto) {
    return this.http.post<IResponse>(API_END_POINTS.addJourney, model);
  }
}
