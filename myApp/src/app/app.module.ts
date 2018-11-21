import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RepeatComponent } from './repeat/repeat.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    RepeatComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
