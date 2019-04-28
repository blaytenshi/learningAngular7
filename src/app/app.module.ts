import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// old @angular/http module has been deprecated
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  // Registers specific modules for Angular to scan and be
  // 'aware' of to use in the application. Here we register
  // the new ServerComponent that we just made
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  // This tells Angular what Component should self-start
  // Inside this AppComponent, angular will look and see
  // which dom element the application should render to
  bootstrap: [AppComponent]
})
export class AppModule { }
