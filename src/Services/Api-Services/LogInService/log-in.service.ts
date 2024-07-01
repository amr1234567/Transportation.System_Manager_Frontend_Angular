import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_END_POINTS } from '../../../Constants/ApiEndPoints';
import { IResponse } from '../../../Models/Base-Models/IResponse';
import { LogInDetails } from '../../../Models/Input-Models/LogInDetails';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { }

  Execute(model: LogInDetails): Observable<IResponse> {
    return this.http.post(API_END_POINTS.login, model);
  }
}
