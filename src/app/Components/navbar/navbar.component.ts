import { Component, Input, OnInit } from '@angular/core';
import { NewsContainerComponent } from '../news-container/news-container.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

}
