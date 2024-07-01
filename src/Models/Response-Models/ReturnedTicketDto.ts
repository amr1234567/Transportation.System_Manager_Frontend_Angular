export interface ReturnedTicketDto {
   seatNumber: number,
   journeyId: string,
   arrivalTime: Date,
   leavingTime: Date,
   destinationBusStopName: string,
   startBusStopName: string,
   price: number,
   ticketId: string
}