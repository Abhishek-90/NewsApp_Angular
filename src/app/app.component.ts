import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'news-app';
  enabled : boolean | undefined ; 
  
  constructor(private store: Store<{ darkmode: { enabled: boolean }}>) {

  }

  ngOnInit(): void {
    if(!localStorage.getItem('darkMode')) {
      localStorage.setItem('darkMode', "false");
    }
    
    this.store.select('darkmode').subscribe(data => {
      this.enabled = data.enabled
    })
  }

}
