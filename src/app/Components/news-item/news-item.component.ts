import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

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
  enabled:boolean | undefined 

  constructor( private store: Store<{ darkmode: { enabled: boolean }}>) { 
  }

  ngOnInit(): void {
    this.newsTitle = `${this.newsTitle.length > 20 ? this.newsTitle.substring(0,20)+'...': this.newsTitle}`
    this.newsAuthor = this.newsAuthor || "Source Unknown"
    this.store.select('darkmode').subscribe(data => {
      this.enabled = data.enabled
    })
  }

}
