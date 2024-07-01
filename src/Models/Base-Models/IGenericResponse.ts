import { IResponse } from "./IResponse";

export interface IGenericResponse<T> extends IResponse {
   body?: T;
}