import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Nav-Bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private navHeight;
  private divHeight;
  private bool;
  constructor() { 


  }


  change(){
    console.log(this.bool);
    if(this.bool==false){
      this.bool=true;
    }else
    {
      this.bool=false;
    }
  }

  nav(){
    console.log(this.divHeight);
    if(this.divHeight=='0'){
      this.divHeight='280';
    }else
    {
      this.divHeight='0';
    }
  }
  ngOnInit() {
    this.navHeight='0';
    this.divHeight='0';
    this.bool=false;
  }

}
