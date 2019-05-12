import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTimeTableRowsService {

  constructor(private http:HttpClient) { }
  getTimeTableRows(from,date){
   return this.http.get("http://localhost:8095/api/TimeTable",{params:{'from':from,'date':date}})
  }

  getBookTicketTimeTableRows(from,date){
    return this.http.get("http://localhost:8095/api/BookTicketTimeTable",{params:{'from':from,'date':date}})
   }

   sendTravelId(from,to,travelID,classNumber){
    return this.http.get("http://localhost:8095/api/Seats",{params:{'from':from,'to':to,'travelID':travelID,'classNumber':classNumber}})
   }

  
}
