import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  // This tells Angular what Component should self-start
  // Inside this AppComponent, angular will look and see
  // which dom element the application should render to
  bootstrap: [AppComponent]
})
export class AppModule { }
