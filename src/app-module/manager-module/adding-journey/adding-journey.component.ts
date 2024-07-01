import { Component, OnInit } from '@angular/core';
import { FILES_PATHS } from '../../../Constants/FilesPaths';
import { JourneyDto } from '../../../Models/Response-Models/JourneyDto';
import { BusStop } from '../../../Models/Response-Models/BusStop';
import { GetRelatedBusStopsService } from '../../../Services/Api-Services/Get-Related-Bus-Stops/get-related-bus-stops.service';
import { GetBusStops } from '../../../Models/Response-Models/GetBusStopsModel';
import { CreateJourneyService } from '../../../Services/Api-Services/Create-Journey/create-journey.service';
import { IGenericResponse } from '../../../Models/Base-Models/IGenericResponse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { arrivalAfterLeavingValidator } from '../../../Services/Validators/Check-Correct-Of-Date/ValidateLeavingDate';
import { futureDateValidator } from '../../../Services/Validators/Check-Correct-Of-Date/ValidateDate';

@Component({
  selector: 'app-adding-journey',
  templateUrl: './adding-journey.component.html',
  styleUrl: './adding-journey.component.scss'
})
export class AddingJourneyComponent implements OnInit {
  constructor(private busStopServices: GetRelatedBusStopsService, private CreateJourneyService: CreateJourneyService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.TicketForm = this.fb.group({
      destinationId: ["", Validators.required],
      BusId: ["", {
        validators: [Validators.required, Validators.pattern(this.BusIdRegex)],
      }],
      ArrivalTime: [new Date(), {
        validators: [
          Validators.required,
        ]
      }],
      LeavingTime: [new Date(), {
        validators: [
          Validators.required,
          futureDateValidator()
        ]
      }],
      TicketPrice: [0, Validators.required],
    }, {
      updatedOn: "blur",
      validators: [arrivalAfterLeavingValidator()]
    })
    this.busStopServices.Execute().subscribe(
      (BusStops: GetBusStops) => {
        this.busStops = BusStops.body;
      }
    )
  }
  TicketForm!: FormGroup;
  BusIdRegex: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
  LoginErrors?: string;
  isCLicked?: boolean;
  CreateJourneyModel: JourneyDto = {
    arrivalTime: new Date(),
    busId: "",
    destinationId: "",
    leavingTime: new Date(),
    ticketPrice: 0
  };
  CreateSuccess: boolean = false;
  MessageOfCallApi = "";
  busStops?: BusStop[];

  AddJourney() {
    this.isCLicked = true;
    this.CreateJourneyService.Execute(this.TicketForm.getRawValue()).subscribe(
      (Response: IGenericResponse<boolean>) => {
        this.TicketForm.reset();
        this.MessageOfCallApi = Response.message ?? "Something Wrong";
        this.CreateSuccess = Response.body ?? false;
      }
    )
    this.isCLicked = false;
  }
  logoPath = FILES_PATHS.logoPath;
}
