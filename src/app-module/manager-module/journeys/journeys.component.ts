import { Component, OnInit } from '@angular/core';
import { GetJourneysService } from '../../../Services/Api-Services/Get-Journeys/get-journeys.service';
import { BusStop } from '../../../Models/Response-Models/BusStop';
import { IGenericResponse } from '../../../Models/Base-Models/IGenericResponse';
import { GetRelatedBusStopsService } from '../../../Services/Api-Services/Get-Related-Bus-Stops/get-related-bus-stops.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpcomingJourney } from '../../../Models/Response-Models/UpComingJourney';
import { FILES_PATHS } from '../../../Constants/FilesPaths';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrl: './journeys.component.scss'
})
export class JourneysComponent implements OnInit {
  constructor(private getJourneys: GetJourneysService, private getBusStops: GetRelatedBusStopsService, private fb: FormBuilder) { }
  DestBusStops?: BusStop[];
  Journeys?: UpcomingJourney[];
  JourneysFiltered?: UpcomingJourney[];
  searchForm!: FormGroup;
  dollarIcon = FILES_PATHS.dollarIconPath;
  dateIcon = FILES_PATHS.datePath;
  searchIcon = FILES_PATHS.searchIcon;
  filterJourneys() {
    this.filterOnDest()
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      DestId: [""],
    })
    this.getJourneys.Execute().subscribe(
      (journeys: IGenericResponse<UpcomingJourney[]>) => {
        this.Journeys = journeys.body;
        this.filterOnDest();
      }
    );
    this.getBusStops.Execute().subscribe(
      (busStops: IGenericResponse<BusStop[]>) => {
        this.DestBusStops = busStops.body;
      }
    )
  }

  filterOnDest() {
    const destId = this.searchForm.get("DestId")?.value as string;
    if (destId == "") {
      this.JourneysFiltered = this.Journeys;
    } else {
      this.JourneysFiltered = this.Journeys?.filter(j => j.destinationId == destId);
    }
  }
}
