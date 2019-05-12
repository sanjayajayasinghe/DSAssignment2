import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public newsData={title:'News 1',description:'csdcscsdsds'};
  constructor() { }

  ngOnInit() {
  }

}
