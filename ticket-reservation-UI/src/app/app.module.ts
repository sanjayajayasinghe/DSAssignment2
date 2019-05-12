import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { RouterModule } from '@angular/router';
import { AppRoutingRoutingModule,routingModules } from './app-routing/app-routing-routing.module';
import {MatCardModule} from '@angular/material/card';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsComponent } from './news/news.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatSelectModule} from '@angular/material/select';
import { GetTimeTableRowsService } from './get-time-table-rows.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RowToFilterPipe } from './row-to-filter.pipe';
import { TicketBookingService } from './ticket-booking.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewsCardComponent,
    NewsComponent,
    routingModules,
    ResponsiveTableComponent,
   RowToFilterPipe
    
   
    
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule,
    MatCardModule,
    NoopAnimationsModule,
    MatFormFieldModule,BrowserAnimationsModule,MatInputModule,MatAutocompleteModule,
    FormsModule,ReactiveFormsModule,MatDatepickerModule,MatNativeDateModule,
    MatGridListModule,MatSelectModule,
    HttpClientModule,
    CommonModule,
    
    
   
  ],
  providers: [GetTimeTableRowsService,TicketBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
