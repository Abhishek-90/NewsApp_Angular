import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {
  @Input() category:string = "general"
  constructor() { }

  ngOnInit(): void {
  }

}
