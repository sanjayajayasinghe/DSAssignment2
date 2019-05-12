import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketBookingService } from '../ticket-booking.service';
import { GetTimeTableRowsService } from '../get-time-table-rows.service';
import { forEach } from '@angular/router/src/utils/collection';
import { ISeats } from '../Seat';

export interface Class_ {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})

export class BookNowComponent implements OnInit {
  public params;
  public travelData;
  private tSeats;
  public seats=[];
  public selectedSeats=[];
  public selectValue;
  public totalCost;
  public bookedSeats:any=[];
  public dSeat:ISeats[];
  public classNumber=1;
  class_: Class_ [] = [
    {value: 1, viewValue: 'class 1'},
    {value: 2, viewValue: 'class 2'},
    {value:3, viewValue: 'class 3'}
  ];

  constructor(private route: ActivatedRoute,private ticketBookinService:TicketBookingService) { }

  ngOnInit() {
    //this.classNumber=1;
    this.totalCost=0;
    this.selectValue=1;
    this.route.params.subscribe((params)=>{console.log(params);this.params=params});
    this.ticketBookinService.totalSeats(this.params.travelID).subscribe((data)=>{this.travelData=data;console.log(this.travelData);this.tSeats=this.travelData.classSeates[0];
    this.loadSeatsDeatails();
    console.log(this.bookedSeats);


     // let bookedSeats=[1,2,3];
      // for(let n=1;n<=this.tSeats;n++){
      //     let a=true;
      //     if(this.bookedSeats.includes(n)){
      //       a=false;
      //     }
      //      this.seats.push(new Seat(n,a,false));
      //    }
   
    });
   // this.tSeats=20;

    // for(let n=1;n<=this.tSeats;n++){
    //   this.seats.push(new Seat(n,"",""));
    // }
   

  }
  test(){
    this.ticketBookinService.totalSeats(this.params.travelID).subscribe((data)=>{this.travelData=data;console.log(this.travelData);this.tSeats=this.travelData.classSeates});
    console.log(this.travelData);
  }

  loadSeatsDeatails(){
    this.ticketBookinService.loadSeatsDeatails(this.params.travelID,this.params.from,this.params.to,this.selectValue).subscribe((seats)=>{this.bookedSeats=seats.map((seat)=>seat.seatNumber);
      for(let n=1;n<=this.tSeats;n++){
        let a=true;
        if(this.bookedSeats.includes(n)){
          a=false;
        }
         this.seats.push(new Seat(n,a,false));
       }
    
    
    });
    console.log(`class=${this.selectValue}`);
  }
  select(event){
    //this.classNumber=value;
    
    this.ticketBookinService.totalSeats(this.params.travelID).subscribe((data)=>{this.travelData=data;console.log(this.travelData);this.tSeats=this.travelData.classSeates[this.selectValue-1];
      this.seats=[];
      this.totalCost=0;
      this.loadSeatsDeatails();
     // let bookedSeats=[1,2,3];
      // for(let n=1;n<=this.tSeats;n++){
      //     let a=true;
      //     if(this.bookedSeats.includes(n)){
      //       a=false;
      //     }
      //      this.seats.push(new Seat(n,a,false));
      //    }
   
    });
  }

  seatBook(seatNumber,availabality,select){
    this.seats.forEach((seat,index)=>{
      if(seatNumber==index+1){
      if(availabality==true){
        
      if(select==false){
      this.seats[index]=new Seat(seatNumber,true,true);
      this.selectedSeats.push(seatNumber);
      this.totalCost+=parseFloat(this.params.cost);
      
      
      }
      else
      {
      this.seats[index]=new Seat(seatNumber,true,false); 
      this.selectedSeats= this.arrayRemove(this.selectedSeats,seatNumber);
      this.totalCost-=parseFloat(this.params.cost);
      }
      }
    }
  }
    ); 
    }

  bookNow(){
    console.log("hi");
    this.ticketBookinService.bookNow(this.params.travelID,this.params.from,this.params.to,this.classNumber,this.selectedSeats).subscribe();

  }



  arrayRemove(arr, value) {

    return arr.filter(function(ele){
        return ele != value;
    });
 
 }
  

}

class Seat{
  public number;
  public availabality;
  public select;
  constructor(number,availabality,select){
      this.number=number;
      this.availabality=availabality;
      this.select=select;

  }
}
