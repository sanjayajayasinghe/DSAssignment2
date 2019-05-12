import { Component, OnInit,Input } from '@angular/core';
import { GetTimeTableRowsService } from '../get-time-table-rows.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsive-table',
  templateUrl: './responsive-table.component.html',
  styleUrls: ['./responsive-table.component.css']
})
export class ResponsiveTableComponent implements OnInit {
  
  @Input()
  public rowsData;
  
  @Input()
  public buttonVisible;

  @Input()
  public to;

  constructor(private getTimeTableRowService:GetTimeTableRowsService,private http:HttpClient,private router:Router) { }

  ngOnInit() {
  // this.getTimeTableRowService.getTimeTableRows("homa","01/05/2019").subscribe(data=>this.rows=data);
   //this.rows=this.http.get("http://localhost:8095/TimeTable?from=homa&date=01/05/2019").subscribe(data=>this.rows=data);
   //console.log(this.rows);
   //this.rows=[{from:'homa',to:'base'}];
   
  }

  sendTravelId(to,from,travelID,classNumber,cost){
    console.log(to);
    this.router.navigate(['/BookNow',{'to':to,'from':from,'travelID':travelID,'classNumber':classNumber,'cost':cost}]);
    //this.getTimeTableRowService.sendTravelId(to,from,travelID)
  }

}
