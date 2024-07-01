import { Routes } from '@angular/router';
import { LoginComponent } from '../app-module/login/login.component';
import { PremetionService } from '../Services/Helper-Services/Premetion/premetion.service';
import { NavLayerComponent } from '../app-module/manager-module/nav-layer/nav-layer.component';
import { AddingJourneyComponent } from '../app-module/manager-module/adding-journey/adding-journey.component';
import { CuttingTicketComponent } from '../app-module/manager-module/cutting-ticket/cutting-ticket.component';
import { NotFoundComponent } from '../app-module/not-found/not-found.component';
import { JourneysComponent } from '../app-module/manager-module/journeys/journeys.component';
import { TicketExportComponent } from '../app-module/manager-module/ticket-export/ticket-export.component';
import { GetAllTicketsComponent } from '../app-module/manager-module/get-all-tickets/get-all-tickets.component';

export const routes: Routes = [
   {
      path: "main",
      component: NavLayerComponent,
      children: [
         {
            path: "get-all-tickets",
            component: GetAllTicketsComponent,
            title: "All Tickets",
         },
         {
            path: "add-journey",
            component: AddingJourneyComponent,
            title: "Add Journey",
         },
         {
            path: "cut-ticket/:id",
            component: CuttingTicketComponent,
            title: "Cut Ticket",
         },
         {
            path: "journeys",
            component: JourneysComponent,
            title: "Journeys",
         },
         {
            path: "ticket/:id",
            component: TicketExportComponent,
            title: "Ticket",
         },
         {
            path: '',
            redirectTo: "journeys",
            pathMatch: "full"
         },
      ], canActivate: [
         PremetionService
      ],

   },
   {
      path: "login",
      component: LoginComponent
   },
   {
      path: '',
      redirectTo: "/main/journeys",
      pathMatch: "full"
   },
   {
      path: "**",
      component: NotFoundComponent
   },
];
