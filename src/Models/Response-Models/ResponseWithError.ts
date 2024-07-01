import { IResponse } from "../Base-Models/IResponse";


export interface ResponseWithErrors extends IResponse {
   body?: ErrorField[];
}

export interface ErrorField {
   fieldName: string;
   errors: string[];
}
