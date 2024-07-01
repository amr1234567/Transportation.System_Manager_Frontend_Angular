import { Component, DoCheck, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LogOutService } from '../../../Services/LogOut/lg-out.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FILES_PATHS } from '../../../Constants/FilesPaths';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-layer',
  templateUrl: './nav-layer.component.html',
  styleUrl: './nav-layer.component.scss',
})

export class NavLayerComponent implements OnInit, DoCheck {
  constructor(private logOutService: LogOutService, private router: Router, private route: ActivatedRoute, private titleService: Title) { }
  ngDoCheck(): void {
    this.title = this.titleService.getTitle();
  }
  ngOnInit(): void {
    this.title = this.titleService.getTitle();
  }
  NavToAllTicketsPage() {
    this.router.navigate(["/main/get-all-tickets"]);
  }
  NavToAddingJourneyPage() {
    this.router.navigate(["/main/add-journey"]);
  }
  NavToJourneysPage() {
    this.router.navigate(["/main/journeys"]);
  }
  date: number = Math.floor(Date.now() / (100 * 60 * 60 * 24 * 10 * 356.25) + 1969);
  logoPath = FILES_PATHS.logoPath;
  title: string = "";

  LogOut() {
    this.logOutService.Execute();
    this.router.navigate(["/login"]);
  }

  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
