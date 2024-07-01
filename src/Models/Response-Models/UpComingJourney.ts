export interface SeatDto {
   seatId: string,
   seatNum: number,
   isAvailable: boolean
};

export interface UpcomingJourney {
   id: string,
   ticketPrice: number,
   destinationId: string,
   startBusStopId: string,
   leavingTime: Date,
   arrivalTime: Date,
   busId: string,
   journeyId: string,
   numberOfAvailableTickets: number,
   destinationName: string,
   startBusStopName: string,
   seats: SeatDto[]
}