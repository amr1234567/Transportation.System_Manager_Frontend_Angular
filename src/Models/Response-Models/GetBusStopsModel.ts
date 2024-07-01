
import { IResponse } from "../Base-Models/IResponse";
import { BusStop } from "./BusStop";

export interface GetBusStops extends IResponse {
   body?: BusStop[];
}