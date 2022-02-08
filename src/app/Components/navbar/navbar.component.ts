import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  enabled: boolean | undefined

  constructor(private store: Store<{darkmode: { enabled: boolean }}>) {}

  ngOnInit(): void {
    this.store.select('darkmode').subscribe((data) => {
      this.enabled = data.enabled;
    })
  }

}
