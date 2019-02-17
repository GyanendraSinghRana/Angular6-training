import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { DayComponentComponent } from './day-component/day-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponentComponent,
    WelcomeComponentComponent,
    DayComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
