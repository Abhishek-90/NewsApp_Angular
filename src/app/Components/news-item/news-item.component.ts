import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})

export class NewsItemComponent implements OnInit {
  @Input() newsTitle: string = ""
  @Input() newsAuthor: string = ""
  @Input() newsDescription: string = ""
  @Input() imageUrl: string = ""
  @Input() newsUrl: string = ""

  constructor() { 
  }

  ngOnInit(): void {
    this.newsTitle = `${this.newsTitle.length > 20 ? this.newsTitle.substring(0,20)+'...': this.newsTitle}`
    this.newsAuthor = this.newsAuthor || "Source Unknown"
  }

}
