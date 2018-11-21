import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RepeatComponent } from './repeat/repeat.component';

import { OrderModule } from 'ngx-order-pipe';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    RepeatComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
