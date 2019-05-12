import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISeats } from './Seat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketBookingService {

  constructor(private http:HttpClient) { }

  totalSeats(travelID){
    return this.http.get("http://localhost:8095/api/getTotalSeats",{params:{'travelID':travelID}})
   }
  loadSeatsDeatails(travelID,from,to,classNumber):Observable<ISeats[]>{
    return this.http.get<ISeats[]>("http://localhost:8095/api/Seats",{params:{'travelID':travelID,'from':from,'to':to,'classNumber':classNumber}})
   }

   bookNow(travelID,from,to,classNumber,seats){
    return this.http.get("http://localhost:8095/api/SeatsBook",{params:{'travelID':travelID,'from':from,'to':to,'classNumber':classNumber,'seats':seats}})
   }

 
}
