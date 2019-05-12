import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  getTimeTableData(){
    fetch("http://localhost:8095/TimeTable?from=homa&date=01/05/2019")
  }

 

}
