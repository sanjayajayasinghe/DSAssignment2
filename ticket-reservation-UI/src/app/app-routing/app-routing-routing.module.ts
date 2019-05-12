import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TimeTableComponent } from '../time-table/time-table.component';
import { NewsComponent } from '../news/news.component';
import { BookTicketsComponent } from '../book-tickets/book-tickets.component';
import { BookNowComponent } from '../book-now/book-now.component';

const routes: Routes = [{ path: 'Home',  component: HomeComponent },
{ path: 'Timetable', component:TimeTableComponent  },{ path: 'News', component:NewsComponent  },{ path: 'BookTickets', component:BookTicketsComponent},
{path:'BookNow',component:BookNowComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingRoutingModule { }
export const routingModules=[HomeComponent,TimeTableComponent,NewsComponent,BookTicketsComponent,BookNowComponent];
