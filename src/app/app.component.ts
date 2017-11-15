import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  srcImage: string;
  srcImageZoom: string;
  showZoom: boolean;
  xPos: number;
  yPos: number;
  pageX: number;
  pageY: number;

  constructor() {
    this.showZoom = false;
    this.srcImage = './assets/image.jpg';
    this.srcImageZoom = './assets/image-zoom.jpg';
  }

  openZoom(event: any, show: boolean) {
    event.preventDefault();
    this.showZoom = show;
    if (show) {
      console.log(event);
      this.positionZoom(event);
    }
  }

  positionZoom(event) {
    const xPos = event.pageX - event.target.offsetLeft;
    const yPos = event.pageY - event.target.offsetTop;
    const xMax = event.target.clientWidth;
    const yMax = event.target.clientHeight;
    console.log(xPos, '* 100', xMax);
    console.log(xPos * 100 / xMax);
    this.xPos = this.validPercent(Math.round(xPos * 100 / xMax));
    this.yPos = this.validPercent(Math.round(yPos * 100 / yMax));
    this.pageX = event.pageX;
    this.pageY = event.pageY;
  }

  validPercent(value) {
    if (value < 0) {
      this.showZoom = false;
      return 0;
    }
    if (value > 100) {
      this.showZoom = false;
      return 100
    }
    return value;
  }

}
