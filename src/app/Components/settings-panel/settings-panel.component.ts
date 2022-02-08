import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setDarkMode } from 'src/app/Store/DarkMode/Actions';

@Component({
  selector: 'app-settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.css']
})

export class SettingsPanelComponent implements OnInit {
  enabled: boolean | undefined;

  constructor(private store: Store<{ darkmode: { enabled: boolean }}>) { 
  }

  handleDarkMode = ():void => {
    // console.log(this.enabled)
    this.store.dispatch(setDarkMode())
    this.enabled = !this.enabled
  }

  ngOnInit(): void {
    this.store.select('darkmode').subscribe(data => {
      this.enabled = data.enabled;
    })
  }

}
