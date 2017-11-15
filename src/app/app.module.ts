import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppImageZoomComponent } from './image-zoom/image-zoom.component';
import { MoveBackgroundDirective } from './image-zoom/image-zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppImageZoomComponent,
    MoveBackgroundDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
