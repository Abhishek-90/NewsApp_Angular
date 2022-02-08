import { Component, Input, OnInit } from '@angular/core';
import * as C from '../../Config/constant'
@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {
  
  @Input() category:string = "general"
  newsResult: [[]] = [[]] //Defined newsResult as an array of Objects; for result fetched via api call
  url: string = " "
  private temp: [] = []

  constructor() { }

  ngOnInit(): void {
    
    this.url = `${C.Endpoint_Top_Headlines}?category=${this.category}&country=${'in'}&apiKey=${C.API_KEY}&pageSize=18`
    this.fetchNews(this.url)
      
  }

  getNewsTitle(item: any) : string {
    return item.title
  }

  getNewsAuthor(item: any) : string {
    return item.author
  }
  
  getNewsDescription(item: any) : string {
    return item.description
  }

  getNewsURL(item: any) : string {
    return item.url
  }
  
  getNewsImageURl(item: any) : string {
    return item.urlToImage
  }

  getNewsDate(item: any) : string {
    return item.publishedAt
  }

  private fetchNews = async (fetchURL: string) : Promise<void> => {
    this.temp = (await (await fetch(fetchURL)).json()).articles
    let i = 0
    let tempSize3: [] = []
    for (let i = 0; i < this.temp.length; i++) {
      if(i == 0) {
        this.newsResult.pop()
      }
      if(i !== 0 && i%3 === 0) {
        this.newsResult.push(tempSize3)
        tempSize3 = [];
      }
      tempSize3.push(this.temp[i]);
      
    }
    this.newsResult.push(tempSize3)
    console.log(this.newsResult)
  }

}
