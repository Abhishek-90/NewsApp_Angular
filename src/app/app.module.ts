import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { NewsContainerComponent } from './Components/news-container/news-container.component';
import { NewsItemComponent } from './Components/news-item/news-item.component';
import { SettingsPanelComponent } from './Components/settings-panel/settings-panel.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { StoreModule } from '@ngrx/store';
import { DarkModeReducer } from './Store/DarkMode/Reducers'
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsContainerComponent,
    NewsItemComponent,
    SettingsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatSlideToggleModule,
    StoreModule.forRoot({darkmode: DarkModeReducer}),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
