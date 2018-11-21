import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modules extras
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

// imports extras

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
