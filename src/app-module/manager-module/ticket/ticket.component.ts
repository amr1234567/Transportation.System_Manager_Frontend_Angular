import { Component, Input, OnInit } from '@angular/core';
import { FILES_PATHS } from '../../../Constants/FilesPaths';
import { ReturnedTicketDto } from '../../../Models/Response-Models/ReturnedTicketDto';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent implements OnInit {
  ngOnInit(): void {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const leavingTime = new Date(this.ticketDetails.leavingTime);
    this.date.dayName = days[leavingTime.getDay()];
    this.date.monthName = months[leavingTime.getMonth()];
    this.date.year = leavingTime.getFullYear();
    this.date.dayNumber = leavingTime.getDate();
  }
  gpsIcon = FILES_PATHS.gpsICon;
  timeIcon = FILES_PATHS.timeIcon2;
  rightArrowIcon = FILES_PATHS.rightArrowIcon;
  date = {
    monthName: "",
    year: 0,
    dayName: "",
    dayNumber: 0
  };
  @Input() ticketDetails: ReturnedTicketDto = {
    arrivalTime: new Date(),
    destinationBusStopName: "",
    journeyId: "",
    leavingTime: new Date(),
    price: 0,
    seatNumber: 0,
    startBusStopName: "",
    ticketId: "",
  };
}
