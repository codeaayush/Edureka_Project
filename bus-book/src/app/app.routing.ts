import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusSearchResultComponent } from './components/bus-search-result/bus-search-result.component';
import { BusSeatComponent } from './components/bus-seat/bus-seat.component';
import { ReviewTicketComponent } from './components/review-ticket/review-ticket.component';
import { SearchBusesComponent } from './components/search-buses/search-buses.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';


const routes: Routes = [
    { path: "", component: SearchBusesComponent },
    { path: "search", component: BusSearchResultComponent },
    { path: "seatSearch", component: BusSeatComponent },
    { path: "confirm", component: UserFormComponent },
    { path: "submit", component: ReviewTicketComponent },
    { path: "confirmData", component: ViewTicketComponent },
    { path: "**", component: WildcardComponent }

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);