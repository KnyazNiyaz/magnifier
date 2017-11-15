import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-zoom',
  templateUrl: 'image-zoom.component.html',
  styleUrls: ['image-zoom.component.scss']
})

export class AppImageZoomComponent {

  @Input('src') src: string;
  @Input('xPos') xPos: number;
  @Input('yPos') yPos: number;

  constructor() {
    this.xPos = 50;
    this.yPos = 50;
  }

}
