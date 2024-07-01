import { IResponse } from "../Base-Models/IResponse";


export interface LogInSuccessResponse extends IResponse {
   body?: {
      token: string;
      tokenExpiration: Date;
   }
}