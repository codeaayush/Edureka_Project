import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBusesComponent } from './components/search-buses/search-buses.component';
import { BusSearchResultComponent } from './components/bus-search-result/bus-search-result.component';

import { SelectBusService } from "./services/get-bus.service";
import { BusSelectService } from "./services/bus-select.service";
import { routing } from './app.routing';
import { BusSeatComponent } from './components/bus-seat/bus-seat.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReviewTicketComponent } from './components/review-ticket/review-ticket.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';
import { UserInfoService } from "./services/user-info.service";
import { SelectSeatService } from "./services/select-seat.service";
import { StyleDirective } from './directives/style.directive';
import { WildcardComponent } from './components/wildcard/wildcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchBusesComponent,
    BusSearchResultComponent,
    BusSeatComponent,
    UserFormComponent,
    ReviewTicketComponent,
    ViewTicketComponent,
    StyleDirective,
    WildcardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SelectBusService, BusSelectService, UserInfoService, SelectSeatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
